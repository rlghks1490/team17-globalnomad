import { useAuth } from "@/context/Authcontext";
import Link from "next/link";

const IndexPage = () => {
  const { user } = useAuth();

  if (user && user.accessToken) {
    // 로그인되어 있는 상태
    return (
      <>
        <div>안녕하세요!! {user.user.nickname}님!!</div>
        <Link href="/my-page">my-page로 이동</Link>
      </>
    );
  } else {
    // 로그인되어 있지 않은 상태
    return (
      <>
        <div>로그인이 필요!!</div>
      </>
    );
  }
};

export default IndexPage;
