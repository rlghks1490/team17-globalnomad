import React from "react";

import LoginHeader from "@/Components/Common/LoginHeader/LoginHeader";
// 헤더 푸터가 적용되어있는 레이아웃 (기본값)
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LoginHeader />
      <main>{children}</main>
    </>
  );
}
