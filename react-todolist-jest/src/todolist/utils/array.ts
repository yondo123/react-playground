import type { TodoItem } from '../types';

export const findIndexByTodoId = (array: TodoItem[], targetId: string) => {
  return array.findIndex(item => item.id === targetId);
};

export const findTodoItemById = (array: TodoItem[], targetId: string) => {
  return array.find(item => item.id === targetId);
};
