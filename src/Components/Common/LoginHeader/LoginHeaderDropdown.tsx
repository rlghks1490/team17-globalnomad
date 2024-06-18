import { useState, useEffect } from "react";
import { useUsersCheckMyInformation } from "@/service/users/useUsersService";
import Link from "next/link";
import { useAuth } from "@/context/Authcontext";
import { useUser } from "@/context/UserContext";

const LoginHeaderDropdown: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { signOut } = useAuth();
  const {
    data: response,
    isLoading,
    isError,
    refetch,
  } = useUsersCheckMyInformation();
  const { user, setUser } = useUser();

  useEffect(() => {
    if (response && response.data) {
      refetch();
      setUser(response.data);
    }
  }, [response, setUser, refetch]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  if (!response) {
    return <div>Not Found data...</div>;
  }

  const handleSignOut = () => {
    signOut();
  };

  const data = response.data;

  return (
    <div>
      <li
        className="dropdown group relative flex cursor-pointer px-4 tracking-wide"
        onClick={toggleDropdown}
      >
        <div className="flex items-center justify-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gnDarkGreen text-center text-sm font-semibold text-gnGray200">
            {user?.profileImageUrl ? (
              <img
                className="h-full w-full rounded-full"
                src={data.profileImageUrl}
                alt="Profile Picture"
              />
            ) : (
              user?.nickname[0]
            )}
          </div>
          <div>{user?.nickname}</div>
        </div>
        <div
          className={`dropdown-menu absolute right-0.5 top-10 ${isDropdownOpen ? "block" : "hidden"} h-auto border-slate-950`}
        >
          <ul className="top-0 w-48 rounded-md border-solid bg-white px-6 py-8 shadow-lg">
            <div className="block rounded-md px-4 py-2 hover:bg-gnGray200">
              <Link
                href="/my-page"
                className="block cursor-pointer text-base font-bold"
              >
                마이페이지
              </Link>
            </div>
            <div className="block rounded-md px-4 py-2 hover:bg-gnGray200">
              <Link
                href="/"
                onClick={handleSignOut}
                className="block cursor-pointer text-base font-bold"
              >
                로그아웃
              </Link>
            </div>
          </ul>
        </div>
      </li>
    </div>
  );
};

export default LoginHeaderDropdown;
