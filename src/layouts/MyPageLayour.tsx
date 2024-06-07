import LoginHeader from "@/Components/Common/LoginHeader/LoginHeader";
import Footer from "@/Components/Footer/Footer";
import ProfileModify from "@/Components/ProfileModify/ProfileModify";
import React from "react";

function MyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoginHeader />
      <ProfileModify />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MyPageLayout;
