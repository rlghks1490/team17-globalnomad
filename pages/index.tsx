import GuestHeader from "@/Components/Common/GuestHeader/GuestHeader";
import LoginHeader from "@/Components/Common/LoginHeader/LoginHeader";
import { useAuth } from "@/context/Authcontext";
import Link from "next/link";

const IndexPage = () => {
  const { user } = useAuth();

  if (user?.accessToken) {
    // 로그인되어 있는 상태
    return (
      <>
        <LoginHeader />
        <div>안녕하세요!! {user.user.nickname}님!!</div>
        <Link href="/test">tet로 이동</Link>
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
