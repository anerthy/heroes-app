import { RouterProvider } from 'react-router';
import { appRouter } from './router/app.router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FavoriteHeroProvider } from './heroes/context/FavoriteHeroContext';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FavoriteHeroProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <RouterProvider router={appRouter} />
        </FavoriteHeroProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
