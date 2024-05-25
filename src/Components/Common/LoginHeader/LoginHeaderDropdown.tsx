import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchUserProfile from "@/apis/user/user";
import Link from "next/link";

interface UserProfileType {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

const LoginHeaderDropdown: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {
    data: UserProfile,
    isLoading,
    isError,
  } = useQuery<UserProfileType>({
    queryKey: ["userProfile"],
    queryFn: () => fetchUserProfile(),
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading profile</div>;
  }

  if (!UserProfile) {
    return <div>Not Found UserProfile</div>;
  }

  return (
    <div>
      <li
        className="dropdown group relative flex cursor-pointer px-4 tracking-wide"
        onClick={toggleDropdown}
      >
        <div className="flex items-center justify-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gnDarkGreen text-center text-sm font-semibold text-gnGray200">
            {UserProfile.profileImageUrl ? (
              <img
                className="h-full w-full rounded-full"
                src={UserProfile.profileImageUrl}
                alt="Profile Picture"
              />
            ) : (
              UserProfile.nickname[0]
            )}
          </div>
          <div>{UserProfile.nickname}</div>
        </div>
        <div
          className={`dropdown-menu absolute right-0.5 top-10 ${isDropdownOpen ? "block" : "hidden"} h-auto border-slate-950`}
        >
          <ul className="top-0 w-48 rounded-md border-solid bg-white px-6 py-8 shadow-lg">
            <div className="block rounded-md px-4 py-2 hover:bg-gnGray200">
              <a href="/" className="block cursor-pointer text-base font-bold">
                마이페이지
              </a>
            </div>
            <div className="block rounded-md px-4 py-2 hover:bg-gnGray200">
              <a href="/" className="block cursor-pointer text-base font-bold">
                로그아웃
              </a>
            </div>
          </ul>
        </div>
      </li>
    </div>
  );
};

export default LoginHeaderDropdown;
