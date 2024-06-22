import MainPage from "@/Components/MainPage";
import { useAuth } from "@/context/Authcontext";
import Head from "next/head";

const IndexPage = () => {
  const { user } = useAuth();

  return(
    <>
      <Head>
        <title>GlobalNomad</title>
      </Head>
      {user && user.accessToken? (
        <MainPage />
      ) : (
        <MainPage />
      )}
    </>
  )
};

export default IndexPage;
