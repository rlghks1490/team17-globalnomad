import Link from "next/link";
import UserProfile from "./UserProfile";

const LoginHeader = () => {
  const teamId = "https://sp-globalnomad-api.vercel.app/4-17/";

  return (
    <nav className="sticky flex h-20 p-3">
      <div className="flex w-full max-w-[1920px] items-center justify-between">
        <div>
          <Link href="/">
            <img src="/icons/headerLogo.svg" alt="headerLogo.svg" />
          </Link>
        </div>
        <UserProfile />
      </div>
    </nav>
  );
};

export default LoginHeader;
