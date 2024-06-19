import MainPage from "@/Components/MainPage";
import Toast from "@/Components/Toast/Toast";
import { useAuth } from "@/context/Authcontext";
import { useState } from "react";

const IndexPage = () => {
  const { user } = useAuth();
  const [showToast, setShowToast] = useState<boolean>(false);

  if (user && user.accessToken) {
    // 로그인되어 있는 상태
    return <MainPage />;
  } else {
    // 로그인되어 있지 않은 상태
    return (
      <>
        {showToast && (
          <Toast onShow={() => setShowToast(false)}>로그인 실패</Toast>
        )}
        <button onClick={() => setShowToast(true)}>버튼버튼</button>
      </>
    );
  }
};

export default IndexPage;
