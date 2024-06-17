import LoginHeader from "@/Components/Common/LoginHeader/LoginHeader";
import Footer from "@/Components/Footer/Footer";
import ProfileModify from "@/Components/ProfileModify/ProfileModify";
import React from "react";
import Test from "@/Components/ProfileModify/test";

function MyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoginHeader />
      <div className="mt-myPageTopMargin flex justify-center gap-6">
        <Test profileImageUrl="" handleChangeImage={() => {}} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default MyPageLayout;
