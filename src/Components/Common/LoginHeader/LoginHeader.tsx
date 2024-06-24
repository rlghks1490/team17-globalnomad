import Link from "next/link";
import UserProfile from "./UserProfile";

const LoginHeader = () => {
  return (
    <nav className="sticky z-10 flex h-20 border-b bg-white p-3">
      <div className="flex w-full  items-center justify-between">
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
