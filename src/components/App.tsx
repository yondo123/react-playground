import { worker } from '@mocks/worker';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Error } from '@components/Error';
import { Loading } from '@components/Loading';
import { Menu } from '@components/Menu';
import { Board } from '@components/Board';
import { Profile } from '@components/Profile';
import { Followers } from '@components/Followers';
import { flexParent } from '@styles/createFlexStyle';
import { globalStyle } from '@styles/createRootStyle';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export const App = () => {
  const queryClient = new QueryClient();
  worker.start();
  return (
    <div css={globalStyle} className="font-loaded">
      <QueryClientProvider client={queryClient}>
        <h2>Jiny Community</h2>
        <ErrorBoundary fallback={<Error />}>
          <Profile />
          <Suspense fallback={<Loading />}>
            <div css={flexParent}>
              <Menu />
              <Board />
              <Followers />
            </div>
          </Suspense>
        </ErrorBoundary>
      </QueryClientProvider>
    </div>
  );
};
