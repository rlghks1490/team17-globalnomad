import MainPage from "@/Components/MainPage";
import { useAuth } from "@/context/Authcontext";

const IndexPage = () => {
  const { user } = useAuth();

  if (user && user.accessToken) {
    // 로그인되어 있는 상태
    return <MainPage />;
  } else {
    // 로그인되어 있지 않은 상태
    return (
      <>
        <MainPage />
      </>
    );
  }
};

export default IndexPage;
