import { act, render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { add, reset } from '@data/slice/todoSlice';
import { store } from '@data/configure';
import { App } from '../App';
import { getToday, formatDate } from '@shared/utils/date';
import { DUMMY_FUTURE_TODO_ITEMS, DUMMY_TODO_ITEMS } from './constants';
import type { TodoItem } from '@todolist/types';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal');
document.body.appendChild(modalRoot);

const renderWithReduxStore = (children: React.ReactNode) => {
  return render(<Provider store={store}>{children}</Provider>);
};

const addTodoItem = async (todoItem: TodoItem) => {
  store.dispatch(add(todoItem));
};

afterEach(() => {
  store.dispatch(reset());
  cleanup();
});

describe('TodoItem 추가 테스트', () => {
  it('"ADD NEW+" 버튼을 클릭하면 작업을 추가하기 위한 Modal이 표시된다.', async () => {
    await act(async () => {
      renderWithReduxStore(<App />);
    });
    await userEvent.click(screen.getByRole('button', { name: 'ADD NEW +' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('마감날짜와 작업을 입력해야 "추가하기" 버튼이 활성화된다.', async () => {
    await act(async () => {
      renderWithReduxStore(<App />);
    });
    const addNewButton = screen.getByRole('button', { name: 'ADD NEW +' });
    await userEvent.click(addNewButton);
    const addTodoButton = screen.getByRole('button', { name: '추가하기' });

    expect(addTodoButton).toBeDisabled();
    await userEvent.type(screen.getByRole('textbox'), '할 일');
    await userEvent.type(screen.getByLabelText('date'), formatDate(getToday()));
    expect(addTodoButton).toBeEnabled();
  });

  it('"추가하기" 버튼을 클릭하면 해당 내용이 리스트에 삽입된다.', async () => {
    await act(async () => {
      renderWithReduxStore(<App />);
    });
    const todoTitle = '할 일';
    await userEvent.click(screen.getByRole('button', { name: 'ADD NEW +' }));
    await userEvent.type(screen.getByRole('textbox'), todoTitle);
    await userEvent.click(screen.getByRole('button', { name: '추가하기' }));
    expect(screen.getByRole('log')).toHaveTextContent('1 TASKS');
    expect(screen.queryAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByRole('mark')).toHaveTextContent(/today/);
    expect(screen.getByText(todoTitle)).toBeInTheDocument();
  });

  it('"UNDO" 버튼을 클릭하면 해당 작업을 취소한다.', async () => {
    await act(async () => {
      renderWithReduxStore(<App />);
    });

    act(() => {
      addTodoItem(DUMMY_TODO_ITEMS[0]);
      addTodoItem(DUMMY_FUTURE_TODO_ITEMS[0]);
    });
    expect(screen.queryAllByRole('listitem')).toHaveLength(2);
    await userEvent.click(screen.getByRole('button', { name: 'UNDO' }));
    expect(screen.queryAllByRole('listitem')).toHaveLength(1);
  });

  it('"REDO" 버튼을 클릭하면 이전 작업을 되돌린다.', async () => {
    await act(async () => {
      renderWithReduxStore(<App />);
    });

    act(() => {
      addTodoItem(DUMMY_TODO_ITEMS[0]);
      addTodoItem(DUMMY_FUTURE_TODO_ITEMS[0]);
    });
    expect(screen.queryAllByRole('listitem')).toHaveLength(2);
    await userEvent.click(screen.getByRole('button', { name: 'UNDO' }));
    expect(screen.queryAllByRole('listitem')).toHaveLength(1);
    await userEvent.click(screen.getByRole('button', { name: 'REDO' }));
    expect(screen.queryAllByRole('listitem')).toHaveLength(2);
  });
});
