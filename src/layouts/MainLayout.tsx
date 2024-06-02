import React from "react";

import LoginHeader from "@/Components/Common/LoginHeader/LoginHeader";
import { useAuth } from "@/context/Authcontext";
import GuestHeader from "@/Components/Common/GuestHeader/GuestHeader";
import Footer from "@/Components/Footer/Footer";
// 헤더 푸터가 적용되어있는 레이아웃 (기본값)
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();

  if (user && user.accessToken) {
    // 로그인되어 있는 상태
    return (
      <>
        <LoginHeader />
        <main>{children}</main>
        <Footer />
      </>
    );
  } else {
    // 로그인되어 있지 않은 상태
    return (
      <>
        <GuestHeader />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
}
