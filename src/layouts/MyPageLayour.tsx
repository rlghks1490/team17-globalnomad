import LoginHeader from "@/Components/Common/LoginHeader/LoginHeader";
import Footer from "@/Components/Footer/Footer";
import ProfileModify from "@/Components/ProfileModify/ProfileModify";
import React from "react";

function MyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="">
        <LoginHeader />
        <div className="mb-32 mt-myPageTopMargin flex min-h-[45.625rem] justify-center gap-6 tablet:mt-6 tablet:min-h-[52.938rem] mobile:mt-6 mobile:min-h-[41.875rem]">
          <ProfileModify profileImageUrl="" handleChangeImage={() => {}} />
          <main>{children}</main>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default MyPageLayout;
