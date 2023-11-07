import { render, screen } from '@testing-library/react';
import { configureStore, Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from '@data/reducer';
import { App } from '../App';

describe('App 테스트', () => {
  let store: Store;
  beforeEach(() => {
    store = configureStore({
      reducer: rootReducer
    });
  });
  it('Todo App이 정상적으로 렌더링이 완료된다.', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
