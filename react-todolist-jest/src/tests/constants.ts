import { getToday } from '@shared/utils/date';
import type { TodoItem } from '@todolist/types';

const today = getToday();
const tomorrow = getToday(getToday().setDate(getToday().getDate() + 1));
export const DUMMY_TODO_ITEMS = Object.freeze<TodoItem[]>([
  {
    id: '1',
    completed: false,
    dueDate: today,
    title: 'test'
  },
  {
    id: '2',
    completed: false,
    dueDate: today,
    title: 'test'
  },
  {
    id: '3',
    completed: false,
    dueDate: today,
    title: 'test'
  }
]);

export const DUMMY_COMPLETED_TODO_ITEMS = Object.freeze<TodoItem[]>([
  {
    id: '4',
    completed: true,
    dueDate: today,
    title: 'test'
  },
  {
    id: '5',
    completed: true,
    dueDate: today,
    title: 'test'
  },
  {
    id: '6',
    completed: true,
    dueDate: today,
    title: 'test'
  }
]);

export const DUMMY_FUTURE_TODO_ITEMS = Object.freeze<TodoItem[]>([
  {
    id: '7',
    completed: false,
    dueDate: tomorrow,
    title: 'test'
  },
  {
    id: '8',
    completed: false,
    dueDate: tomorrow,
    title: 'test'
  },
  {
    id: '9',
    completed: false,
    dueDate: tomorrow,
    title: 'test'
  }
]);
