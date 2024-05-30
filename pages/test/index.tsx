import LoginHeader from "@/Components/Common/LoginHeader/LoginHeader";
import { useAuth } from "@/context/Authcontext";
import { GetServerSideProps } from "next";
import React, { useEffect } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;

  if (!req.headers.cookie)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  if (req.headers.cookie) {
    if (req.headers.cookie.includes("accessToken")) {
      return { props: {} };
    }
  }
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};

const test = () => {
  const { user } = useAuth();

  useEffect(() => {});

  return (
    <div>
      <LoginHeader />
      <h1>안녕 나는 {user?.user.nickname} 에용</h1>
    </div>
  );
};

export default test;
