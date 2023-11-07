import { createSlice } from '@reduxjs/toolkit';
import { findIndexByTodoId, findTodoItemById } from '@todolist/utils/array';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TodoItem } from '@todolist/types';

const initialState: TodoItem[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    reset: () => initialState,
    add: (state, action: PayloadAction<TodoItem>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<Pick<TodoItem, 'id'>>) => {
      const todoIndex = findIndexByTodoId(state, action.payload.id);
      state.splice(todoIndex, 1);
    },
    redo: (state, action: PayloadAction<Pick<TodoItem, 'id'>>) => {
      const todoItem = findTodoItemById(state, action.payload.id);
      if (todoItem) {
        todoItem.completed = !Boolean(todoItem.completed);
      }
    },
    complete: (state, action: PayloadAction<Pick<TodoItem, 'id'>>) => {
      const todoItem = findTodoItemById(state, action.payload.id);
      if (todoItem) {
        todoItem.completed = true;
      }
    },
    incomplete: (state, action: PayloadAction<Pick<TodoItem, 'id'>>) => {
      const todoItem = findTodoItemById(state, action.payload.id);
      if (todoItem) {
        todoItem.completed = false;
      }
    },
    undo: (state, action: PayloadAction<Pick<TodoItem, 'id'>>) => {
      const todoItem = findTodoItemById(state, action.payload.id);
      if (todoItem) {
        todoItem.completed = true;
      }
    }
  }
});

export default todoSlice;
export const { add, remove, complete, incomplete, reset } = todoSlice.actions;
