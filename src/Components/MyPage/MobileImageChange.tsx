import { useUser } from "@/context/UserContext";
import {
  useUsersCheckMyInformation,
  useUsersEditMyInformation,
  useUsersProfileImageUrl,
} from "@/service/users/useUsersService";
import { UsersEditMyInformation } from "@/service/users/users.type";
import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import Toast from "../Toast/Toast";

interface UsersEditImageUploaderProps {
  profileImageUrl: string;
  handleChangeImage: (imageUrl: string) => void;
}

const MobileImageChange = ({
  profileImageUrl,
  handleChangeImage,
}: UsersEditImageUploaderProps) => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string>(profileImageUrl);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");

  const { user } = useUser();
  const queryClient = useQueryClient();

  const { mutate: uploadImage } = useUsersProfileImageUrl();
  const { mutate: editImage } = useUsersEditMyInformation();

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    isImageProfile: boolean = false,
  ) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("profileImage", file);

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        setPickedImage(fileReader.result as string);
      };

      try {
        uploadImage(formData, {
          onSuccess: (response) => {
            if (isImageProfile) {
              const newProfileImageUrl = response.data.profileImageUrl;
              setProfileImage(newProfileImageUrl);
              handleChangeImage(newProfileImageUrl);
              const payload: UsersEditMyInformation = {
                nickname: user!.nickname,
                profileImageUrl: newProfileImageUrl,
              };
              editImage(payload, {
                onSuccess: () => {
                  queryClient.invalidateQueries({
                    queryKey: ["usersCheckMyInformation"],
                  });
                  setToastMessage("프로필 이미지가 성공적으로 수정되었습니다.");
                  setShowToast(true);
                },
                onError: () => {
                  setToastMessage("프로필 이미지 수정에 실패했습니다.");
                  setShowToast(true);
                },
              });
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
  const {
    data: response,
    isLoading,
    isError,
  } = useUsersCheckMyInformation(profileImageUrl);

  const data = response?.data;

  return (
    <div className="relative flex items-center justify-center space-x-3 tablet:hidden deskTop:hidden">
      <label className="relative flex h-[160px] w-[160px] cursor-pointer flex-nowrap items-center overflow-auto rounded-full border-4 border-gnGray200 bg-gnGray200">
        <input
          type="file"
          className="hidden"
          onChange={(e) => handleImageUpload(e, true)}
        />
        {pickedImage ? (
          <img src={pickedImage} alt="profileImgUrl" />
        ) : data?.profileImageUrl ? (
          <img src={data?.profileImageUrl} alt="profileImgUrl" />
        ) : (
          <img
            src="/images/defaultProfileImage.png"
            alt="defaultProfileImage.png"
          />
        )}
      </label>
      <div className="absolute bottom-0 right-24 tablet:right-4">
        <img
          className="rounded-full bg-gnDarkGreen p-2.5"
          src="/icons/profileModifyIcon.svg"
          alt="modifyIcon"
        />
      </div>
      {showToast && (
        <Toast onShow={() => setShowToast(false)}>{toastMessage}</Toast>
      )}
    </div>
  );
};

export default MobileImageChange;
