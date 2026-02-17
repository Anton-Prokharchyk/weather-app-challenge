import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const qc = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      throwOnError: true, // ← глобально для всех useQuery
    },
    mutations: {
      throwOnError: true, // ← если хочешь то же поведение для мутаций
    },
  },
});

export const RactQueryClientProvider = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={qc}>{children}</QueryClientProvider>
);
