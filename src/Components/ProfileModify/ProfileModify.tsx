import React from "react";
import Link from "next/link";
import { useUsersCheckMyInformation } from "@/service/users/useUsersService";

const ProfileModify: React.FC = () => {
  const { data: response, isLoading, isError } = useUsersCheckMyInformation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  if (!response) {
    return <div>Not Found data...</div>;
  }
  const data = response.data;

  return (
    <div className="flex justify-center gap-10 py-10">
      <div className="flex w-full max-w-4xl ">
        <div className="flex w-64 flex-col gap-6 rounded-lg border bg-white p-6">
          <div className="relative flex items-center space-x-3">
            <button className=" relative flex flex-nowrap items-center overflow-auto rounded-full border-4 border-gnGray200 bg-gnGray200">
              {data.profileImageUrl ? (
                <img src={data.profileImageUrl} alt="profileImgUrl" />
              ) : (
                <img
                  src="/images/defaultProfileImage.png"
                  alt="defaultProfileImage.png"
                />
              )}
            </button>
            <div className="absolute bottom-0 right-1 ">
              <img
                className="rounded-full bg-gnDarkGreen p-2.5"
                src="/icons/profileModifyIcon.svg"
                alt="modifyIcon"
              ></img>
            </div>
          </div>
          <div className="mt-6 space-y-1">
            <Link
              href="#"
              className="block rounded-xl bg-gnSoftGreen px-3 py-2 text-left font-bold text-black"
              prefetch={false}
            >
              <div className="flex gap-3 tracking-tighter">
                <img src="/icons/myInfo.svg" alt="myInfo.svg" />내 정보
              </div>
            </Link>
            <Link
              href="#"
              className="block rounded-xl px-3 py-2 text-left font-bold text-gnGray600 hover:bg-gray-100"
              prefetch={false}
            >
              <div className="flex gap-3 tracking-tighter">
                <img
                  src="/icons/myReservationList.svg"
                  alt="myReservationList.svg"
                />
                예약 내역
              </div>
            </Link>
            <Link
              href="#"
              className="block rounded-xl px-3 py-2 text-left font-bold text-gnGray600 hover:bg-gray-100"
              prefetch={false}
            >
              <div className="flex gap-3 tracking-tighter">
                <img src="/icons/myActivities.svg" alt="myActivities.svg" />내
                체험 관리
              </div>
            </Link>
            <Link
              href="#"
              className="block rounded-xl px-3 py-2 text-left font-bold text-gnGray600 hover:bg-gray-100"
              prefetch={false}
            >
              <div className="flex gap-3 tracking-tighter">
                <img
                  src="/icons/myReservationCheck.svg"
                  alt="myReservationCheck.svg"
                />
                예약 현황
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModify;
