import { Global } from '@emotion/react';
import { containerStyle } from '@shared/layouts/styles/containerStyle';
import { Header } from '@shared/layouts/components/Header';
import { TodoList } from '@todolist/components/TodoList';
import { TodoListControls } from '@todolist/components/TodoListControls';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './data/slice/todoSlice';
import resetStyles from '@shared/styles/resetStyle';
import type { RootState } from './data/configure';
import { Tag } from '@shared/layouts/components/Tag';

export const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.present);
  console.log(todos);

  const addTodo = () => {
    dispatch(add({ title: '새로운 할 일', completed: false, id: '21', dueDate: new Date() }));
  };
  return (
    <main css={containerStyle}>
      <Global styles={resetStyles} />
      {/* <button onClick={addTodo}>투두추가</button> */}
      <Header />
      <TodoList />
      <TodoListControls />
    </main>
  );
};
