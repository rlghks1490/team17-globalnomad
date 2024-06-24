import HeadMeta from "@/Components/Common/HeadMeta";
import MainPage from "@/Components/MainPage";
import { META_TAG } from "@/constants/metaTag";
import { useAuth } from "@/context/Authcontext";
import Head from "next/head";

const IndexPage = () => {
  const { user } = useAuth();

  return (
    <>
      <HeadMeta
        title={META_TAG.home["title"]}
        description={META_TAG.myReservation["description"]}
      />
      {user && user.accessToken ? <MainPage /> : <MainPage />}
    </>
  );
};

export default IndexPage;
