import { TodoListItem } from './TodoListItem';
import { containerStyle } from '../styles';
import { useTodo } from '../hooks/useTodo';
export const TodoList = () => {
  const { getTodoList } = useTodo();
  const todoList = getTodoList();
  return (
    <section css={containerStyle}>
      <ol>
        {todoList.map(todo => (
          <TodoListItem key={todo.id} {...todo} />
        ))}
      </ol>
    </section>
  );
};
