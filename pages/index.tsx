import GuestHeader from "@/Components/Common/GuestHeader/GuestHeader";
import LoginHeader from "@/Components/Common/LoginHeader/LoginHeader";
import { useAuth } from "@/context/Authcontext";

const IndexPage = () => {
  const { user } = useAuth();

  if (user?.accessToken) {
    // 로그인되어 있는 상태
    return (
      <>
        <LoginHeader />
        <div>안녕하세요!! {user.user.nickname}님!!</div>
      </>
    );
  } else {
    // 로그인되어 있지 않은 상태
    return (
      <>
        <GuestHeader />
        <div>로그인이 필요!!</div>
      </>
    );
  }
};

export default IndexPage;
