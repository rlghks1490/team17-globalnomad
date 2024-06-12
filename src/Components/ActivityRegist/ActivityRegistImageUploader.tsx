import Image from "next/image";
import AddImageBtn from "../../../public/icons/addImageBtn.svg";
import CloseBtn_Large from "../../../public/icons/closeBtn_large.svg";
import { useActivitiesImageUrl } from "@/service/activities/useActivitiesService";
import { useState } from "react";

interface ActivityRegistImageUploaderProps {
  handleChangeBannerImage: (imageUrl: string) => void;
  handleChangeSubImages: (imageUrl: string[]) => void;
}

const ActivityRegistImageUploader = ({
  handleChangeBannerImage,
  handleChangeSubImages,
}: ActivityRegistImageUploaderProps) => {
  const [bannerImage, setBannerImage] = useState<string>("");
  const [newSubImages, setNewSubImages] = useState<string[]>([]);
  const { mutate: uploadImage } = useActivitiesImageUrl();

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    isBanner: boolean = false,
  ) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      uploadImage(formData, {
        onSuccess: (response) => {
          if (isBanner) {
            setBannerImage(response.data.activityImageUrl);
            handleChangeBannerImage(response.data.activityImageUrl);
          } else if (newSubImages.length < 4) {
            const newImageUrl = response.data.activityImageUrl;
            setNewSubImages((prev) => {
              const updatedNewSubImages = [...prev, newImageUrl];
              handleChangeSubImages(updatedNewSubImages);
              return updatedNewSubImages;
            });
          }
        },
        onError: (error) => {
          console.error("Image upload failed:", error);
        },
      });
    }
  };

  const handleImageRemove = (image: string, isBanner: boolean = false) => {
    if (isBanner) {
      setBannerImage("");
      handleChangeBannerImage("");
    } else {
      setNewSubImages((prev) => {
        const updatedNewSubImages = prev.filter((url) => url !== image);
        handleChangeSubImages(updatedNewSubImages);
        return updatedNewSubImages;
      });
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <label className="text-2xl font-bold">배너 이미지</label>
        <div className="flex gap-6">
          <label className="width-[180px] height-[180px] flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gnGray800 px-[35px] py-[38px]">
            <input
              type="file"
              className="hidden"
              disabled={!!bannerImage}
              onChange={(e) => handleImageUpload(e, true)}
            />
            <div className="flex h-full w-full flex-col items-center justify-center gap-[30px]">
              <Image
                src={AddImageBtn}
                alt="addImageBtn"
                width={48}
                height={48}
              />
              <p className="whitespace-nowrap text-2xl font-normal">
                이미지 추가
              </p>
            </div>
          </label>
          {bannerImage && (
            <div className="relative h-[180px] w-[180px]">
              <Image
                src={bannerImage}
                alt="bannerImageUrl"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
              <button>
                <Image
                  src={CloseBtn_Large}
                  alt="closeBtn"
                  width={40}
                  height={40}
                  className="absolute -right-4 -top-4"
                  onClick={() => handleImageRemove(bannerImage, true)}
                />
              </button>
            </div>
          )}
        </div>
        {bannerImage && (
          <p className="text-lg font-normal text-gnGray800">
            * 배너 이미지는 1개만 등록 가능합니다.
          </p>
        )}
      </div>
      <div className="flex flex-col gap-6">
        <label className="text-2xl font-bold">소개 이미지</label>
        <div className="flex flex-wrap gap-6">
          <label className="width-[180px] height-[180px] flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gnGray800 px-[35px] py-[38px]">
            <input
              type="file"
              className="hidden"
              disabled={newSubImages.length >= 4}
              onChange={(e) => handleImageUpload(e, false)}
            />
            <div className="flex h-full w-full flex-col items-center justify-center gap-[30px]">
              <Image
                src={AddImageBtn}
                alt="addImageBtn"
                width={48}
                height={48}
              />
              <p className="whitespace-nowrap text-2xl font-normal">
                이미지 추가
              </p>
            </div>
          </label>
          {newSubImages.map((url, index) => (
            <div key={index} className="relative h-[180px] w-[180px]">
              <Image
                src={url}
                alt="newSubImage"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
              <button
                onClick={() => handleImageRemove(url)}
                className="absolute -right-4 -top-4"
              >
                <Image
                  src={CloseBtn_Large}
                  alt="closeBtn"
                  width={40}
                  height={40}
                />
              </button>
            </div>
          ))}
        </div>
        {newSubImages.length >= 4 && (
          <p className="text-lg font-normal text-gnGray800">
            * 소개 이미지는 최대 4개까지 등록 가능합니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default ActivityRegistImageUploader;
