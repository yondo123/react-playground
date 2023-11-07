import { act, render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { add, reset } from '@data/slice/todoSlice';
import { store } from '@data/configure';
import { App } from '../App';
import { DUMMY_FUTURE_TODO_ITEMS, DUMMY_TODO_ITEMS } from './constants';
import type { TodoItem } from '@todolist/types';

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

describe('TodoList 테스트', () => {
  it('리스트의 초기 todo 갯수는 0개이다.', () => {
    renderWithReduxStore(<App />);
    expect(screen.getByRole('log')).toHaveTextContent('0 TASKS');
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  it('todo 갯수에 따라 listitem이 증가한다.', async () => {
    await act(async () => {
      renderWithReduxStore(<App />);
    });

    act(() => {
      addTodoItem(DUMMY_TODO_ITEMS[0]);
    });

    expect(screen.getByRole('log')).toHaveTextContent('1 TASKS');
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
  });

  it('todo를 선택하면 checked 상태가 true로 변경된다. ', async () => {
    await act(async () => {
      renderWithReduxStore(<App />);
    });

    act(() => {
      addTodoItem(DUMMY_TODO_ITEMS[0]);
    });

    const todoItem = screen.getByRole('checkbox');
    expect(todoItem).not.toBeChecked();
    await userEvent.click(todoItem);
    expect(todoItem).toBeChecked();
  });

  it('선택된 todo를 다시 선택하면 checked 상태가 false로 변경된다.', async () => {
    await act(async () => {
      renderWithReduxStore(<App />);
    });

    act(() => {
      addTodoItem(DUMMY_TODO_ITEMS[0]);
    });

    const todoItem = screen.getByRole('checkbox');
    await userEvent.click(todoItem);
    expect(todoItem).toBeChecked();
    await userEvent.click(todoItem);
    expect(todoItem).not.toBeChecked();
  });

  it('todo를 삭제하면 listitem이 삭제된다.', async () => {
    await act(async () => {
      renderWithReduxStore(<App />);
    });

    act(() => {
      addTodoItem(DUMMY_TODO_ITEMS[0]);
    });

    const todoItem = screen.getByRole('checkbox');
    await userEvent.click(todoItem);
    expect(todoItem).toBeChecked();
    await userEvent.click(screen.getByRole('button', { name: 'REMOVE' }));
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  it("todo 마감날짜가 오늘이라면 'today'라는 메시지가 표시된다.", async () => {
    await act(async () => {
      renderWithReduxStore(<App />);
    });

    act(() => {
      addTodoItem(DUMMY_TODO_ITEMS[0]);
    });

    expect(screen.getByRole('mark')).toHaveTextContent(/today/);
  });

  it('todo 마감날짜가 오늘 이후라면 남은 날짜 메세지로 표시된다.', async () => {
    await act(async () => {
      renderWithReduxStore(<App />);
    });

    act(() => {
      addTodoItem(DUMMY_FUTURE_TODO_ITEMS[0]);
    });

    expect(screen.getByRole('mark')).toHaveTextContent(/D-1/);
  });
});
