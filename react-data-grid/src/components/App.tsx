import 'react-data-grid/lib/styles.css';
import { PokeList } from './grid/PokeList';
import { PokeBanner } from './grid/PokeBanner';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <section className="flex flex-col gap-4 max-w-screen-lg justify-center mx-auto h-dvh w-full">
        <PokeBanner />
        <PokeList />
      </section>
    </QueryClientProvider>
  );
};
