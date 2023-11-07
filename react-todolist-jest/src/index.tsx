import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './data/configure';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
