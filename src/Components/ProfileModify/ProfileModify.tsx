import { useState } from "react";
import Link from "next/link";
import {
  useUsersCheckMyInformation,
  useUsersProfileImageUrl,
} from "@/service/users/useUsersService";

interface UsersEditImageUploaderProps {
  profileImageUrl: string;
  handleChangeImage: (imageUrl: string) => void;
}

const ProfileModify = ({
  profileImageUrl,
  handleChangeImage,
}: UsersEditImageUploaderProps) => {
  const [profileImage, setProfileImage] = useState<string>(profileImageUrl);
  const { mutate: uploadImage } = useUsersProfileImageUrl();

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    isImageProfile: boolean = false,
  ) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("profileImage", file);

      formData.forEach((value, key) => {
        console.log(key, value);
      });

      try {
        uploadImage(formData, {
          onSuccess: (response) => {
            if (isImageProfile) {
              setProfileImage(response.data.profileImageUrl);
              handleChangeImage(response.data.profileImageUrl);
            }
          },
          onError: (error) => {
            console.error("Image upload failed:", error);
          },
        });
      } catch (error) {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

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
    <div className="flex justify-center gap-10">
      <div className="flex h-[400px] max-w-4xl tablet:w-[250px] ">
        <div className="flex w-[380px] flex-col rounded-lg border bg-white p-6">
          <div className="relative flex items-center justify-center space-x-3">
            <label className=" relative flex h-[160px] w-[160px] flex-nowrap items-center overflow-auto rounded-full border-4 border-gnGray200 bg-gnGray200">
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleImageUpload(e)}
              />
              {data.profileImageUrl ? (
                <img src={profileImage} alt="profileImgUrl" />
              ) : (
                <img
                  src="/images/defaultProfileImage.png"
                  alt="defaultProfileImage.png"
                />
              )}
            </label>
            <label className="absolute bottom-0 right-20 tablet:right-4 ">
              <img
                className="rounded-full bg-gnDarkGreen p-2.5"
                src="/icons/profileModifyIcon.svg"
                alt="modifyIcon"
                alt="modifyIcon"
              ></img>
            </label>
          </div>
          <div className="mt-6 space-y-1">
            <Link
              href="/my-page"
              className="block rounded-xl px-3 py-2 text-left font-bold text-gnGray600 hover:bg-gnSoftGreen  hover:text-black "
              prefetch={false}
            >
              <div className="flex gap-3 tracking-tighter">
                <img src="/icons/myInfo.svg" alt="myInfo.svg" />내 정보
              </div>
            </Link>
            <Link
              href="/my-page/reservations"
              className="block rounded-xl px-3 py-2 text-left font-bold text-gnGray600 hover:bg-gnSoftGreen  hover:text-black "
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
              className="block rounded-xl px-3 py-2 text-left font-bold text-gnGray600 hover:bg-gnSoftGreen  hover:text-black"
              prefetch={false}
            >
              <div className="flex gap-3 tracking-tighter">
                <img src="/icons/myActivities.svg" alt="myActivities.svg" />내
                체험 관리
              </div>
            </Link>
            <Link
              href="#"
              className="block rounded-xl px-3 py-2 text-left font-bold text-gnGray600 hover:bg-gnSoftGreen  hover:text-black"
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
