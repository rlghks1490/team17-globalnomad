import { AuthProvider } from "@/context/Authcontext";
import MainLayout from "@/layouts/MainLayout";
import MyPageLayout from "@/layouts/MyPageLayour";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

// 각 페이지에서 불러와서 쓸 '레이아웃이 적용된 페이지'의 type
type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};
// 레이아웃 가이드
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const queryClient = new QueryClient();
  const router = useRouter();

  // getLayout 설정 안하면 MainLayout 적용
  const getLayout =
    Component.getLayout ||
    ((page) => {
      if (router.pathname.startsWith("/my-page")) {
        return <MyPageLayout>{page}</MyPageLayout>;
      }
      return <MainLayout>{page}</MainLayout>;
    });

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {getLayout(<Component {...pageProps} />)}
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
    </QueryClientProvider>
  );
}
