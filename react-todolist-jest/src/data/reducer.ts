import { combineReducers } from '@reduxjs/toolkit';
import undoable from 'redux-undo';
import todoSlice from './slice/todoSlice';

const rootReducer = combineReducers({
  todo: undoable(todoSlice.reducer)
});

export default rootReducer;
