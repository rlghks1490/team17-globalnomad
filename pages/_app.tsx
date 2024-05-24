import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
=======
  
  const queryClient = new QueryClient();

>>>>>>> 44bcfa21b5f4acdf92d7dabcab52d8955ef84778
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
<<<<<<< HEAD
);
=======
  );
>>>>>>> 44bcfa21b5f4acdf92d7dabcab52d8955ef84778
}
