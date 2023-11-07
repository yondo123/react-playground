import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TodoItem } from '@todolist/types';

type TodoHistoryState = {
  past: TodoItem[];
  present: TodoItem | null;
  future: TodoItem[];
};

const initialState: TodoHistoryState = {
  past: [],
  present: null,
  future: []
};

const todoHistorySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    undo: state => {
      const { past, present, future } = state;
      const prevTodo = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);

      if (present && prevTodo) {
        state.past = newPast;
        state.present = prevTodo;
        state.future = [present, ...future];
      }
    },
    redo: state => {
      const { past, present, future } = state;
      const nextTodo = future[0];
      const newFuture = future.slice(1);
      if (present && nextTodo) {
        state.past = [...past, present];
        state.present = nextTodo;
        state.future = newFuture;
      }
    },
    update: (state, action: PayloadAction<TodoItem>) => {
      const { past, present } = state;
      if (present) {
        const newPast = [...past, present];
        state.past = newPast;
        state.present = action.payload;
        state.future = [];
        return;
      }
      state.present = action.payload;
    }
  }
});

export default todoHistorySlice;
export const { undo, redo, update } = todoHistorySlice.actions;
