import ProfileModify from "@/Components/ProfileModify/ProfileModify";
import React from "react";

function MyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProfileModify />
      <main>{children}</main>
    </>
  );
}

export default MyPageLayout;
