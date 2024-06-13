import React from "react";

// 로그인, 회원가입에 사용될 헤더 푸터가 없는 레이아웃
function EmptyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

export default EmptyLayout;
