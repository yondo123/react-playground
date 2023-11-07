import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, complete, incomplete } from '@data/slice/todoSlice';
import { ActionCreators } from 'redux-undo';
import type { RootState } from '@data/configure';

export const useTodo = () => {
  const id = useId();
  const dispatch = useDispatch();
  const getTodoList = () => {
    return useSelector((state: RootState) => state.todo.present);
  };

  const addTodo = (dueDate: Date, todoItem: string) => {
    const newTodoItem = { id, dueDate, title: todoItem, completed: false };
    dispatch(add(newTodoItem));
  };

  const removeTodo = (id: string) => {
    dispatch(remove({ id }));
  };

  const completeTodo = (id: string) => {
    dispatch(complete({ id }));
  };

  const incompleteTodo = (id: string) => {
    dispatch(incomplete({ id }));
  };

  const redoTodo = () => {
    dispatch(ActionCreators.redo());
  };

  const undoTodo = () => {
    dispatch(ActionCreators.undo());
  };

  return { addTodo, getTodoList, completeTodo, incompleteTodo, removeTodo, redoTodo, undoTodo };
};
