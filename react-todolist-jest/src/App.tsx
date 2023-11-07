import { Global } from '@emotion/react';
import { containerStyle } from '@shared/layouts/styles/containerStyle';
import { Header } from '@shared/layouts/components/Header';
import { TodoList } from '@todolist/components/TodoList';
import { TodoListControls } from '@todolist/components/TodoListControls';
import resetStyles from '@shared/styles/resetStyle';

export const App = () => {
  return (
    <main css={containerStyle}>
      <Global styles={resetStyles} />
      <Header />
      <TodoList />
      <TodoListControls />
    </main>
  );
};
