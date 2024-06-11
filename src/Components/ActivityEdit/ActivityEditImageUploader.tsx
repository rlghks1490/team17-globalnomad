import Image from "next/image";
import AddImageBtn from "../../../public/icons/addImageBtn.svg";
import CloseBtn_Large from "../../../public/icons/closeBtn_large.svg";
import { useActivitiesImageUrl } from "@/service/activities/useActivitiesService";
import { useState } from "react";

interface ActivityImageUrl {
  activityImageUrl: string;
}

interface ActivityEditImageUploaderProps {
  bannerImageUrl: string;
}

const ActivityEditImageUploader = ({
  bannerImageUrl,
}: ActivityEditImageUploaderProps) => {
  const [bannerImage, setBannerImage] = useState<string>(bannerImageUrl);
  const { mutate: uploadImage } = useActivitiesImageUrl();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      uploadImage(formData, {
        onSuccess: (response) => {
          setBannerImage(response.data.activityImageUrl);
        },
        onError: (error) => {
          console.error("Image upload failed:", error);
        },
      });
    }
  };

  const handleImageRemove = () => {
    setBannerImage("");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <label className="text-2xl font-bold">배너 이미지</label>
        <div className="flex gap-6">
          <label className="width-[180px] height-[180px] flex flex-col items-center justify-center rounded-xl border border-dashed border-gnGray800 px-[35px] py-[38px]">
            <input
              type="file"
              className="hidden"
              onChange={handleImageUpload}
            />
            <div className="flex h-full w-full flex-col items-center justify-center gap-[30px]">
              <Image
                src={AddImageBtn}
                alt="addImageBtn"
                width={48}
                height={48}
              />
              <p className="text-2xl font-normal">이미지 추가</p>
            </div>
          </label>
          <div className="relative h-[180px] w-[180px]">
            <Image
              // src={bannerImageUrl}
              src="/images/sampleBannerImage.jpeg"
              alt="bannerImageUrl"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
            />
            <Image
              src={CloseBtn_Large}
              alt="closeBtn"
              width={40}
              height={40}
              className="absolute -right-4 -top-4"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <label className="text-2xl font-bold">소개 이미지</label>
        <div className="flex gap-6">
          <button className="width-[180px] height-[180px] flex flex-col items-center justify-center rounded-xl border border-dashed border-gnGray800 px-[35px] py-[38px]">
            <label className="flex h-full w-full flex-col items-center justify-center gap-[30px]">
              <input
                type="file"
                className="hidden"
                onChange={handleImageUpload}
              />
              <Image
                src={AddImageBtn}
                alt="addImageBtn"
                width={48}
                height={48}
              />
              <p className="text-2xl font-normal">이미지 추가</p>
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityEditImageUploader;
