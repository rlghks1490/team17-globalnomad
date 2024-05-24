import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchUserProfile from "@/apis/user/user";

interface UserProfileType {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

const UserProfile: React.FC = ({}) => {
  const {
    data: UserProfile,
    isLoading,
    isError,
  } = useQuery<UserProfileType>({
    queryKey: ["userProfile"],
    queryFn: () => fetchUserProfile(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading profile</div>;
  }

  if (!UserProfile) {
    return <div></div>;
  }

  return (
    <div className="flex items-center justify-center text-gnDarkBlack">
      <button>
        <img src="/icons/alarmIcon.svg" alt="alarmIcon.svg" />
      </button>
      <div className="mx-4 h-6 w-px bg-gnGray300"></div>
      <button className="flex items-center justify-between gap-3">
        <img src={UserProfile.profileImageUrl} alt="Profile Picture" />
        {UserProfile.nickname}
      </button>
    </div>
  );
};
export default UserProfile;
