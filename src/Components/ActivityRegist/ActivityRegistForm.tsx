import { useState } from "react";
import ActivityRegistInfo from "./ActicityRegistInfo";
import ActivityRegistImageUploader from "./ActivityRegistImageUploader";
import ActivityRegistSchedule from "./ActivityRegistSchedule";
import { useActivitiesRegistration } from "@/service/activities/useActivitiesService";
import { useModal } from "@/hooks/useModal";
import ModalAlert from "../Modal/ModalAlert";

interface Schedule {
  date: string;
  startTime: string;
  endTime: string;
}

interface formDataType {
  title: string;
  category: string;
  description: string;
  price: number;
  address: string;
  schedules: Schedule[];
  bannerImageUrl: string;
  subImageUrls: string[];
}

const AcitivyRegistForm = () => {
  const [formData, setFormData] = useState<formDataType>({
    title: "",
    category: "",
    description: "",
    price: 0,
    address: "",
    schedules: [],
    bannerImageUrl: "",
    subImageUrls: [],
  });
  const { isOpenModal, handleModalOpen, handleModalClose } = useModal();
  const { mutate: regist } = useActivitiesRegistration();

  const handleActivityRegist = (formData: formDataType) => {
    regist(formData, {
      onSuccess: () => {
        handleModalOpen();
        console.log("등록 성공!");
      },
      onError: (error) => {
        console.error("등록에 실패했습니다.", error);
      },
    });
  };

  // Info(title, category, description, price, address) 입력 시 formData에 적용하는 함수
  const handleAddInfo = (name: string, value: number | string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // 새로운 일정을 formData(schedulesToAdd)에 적용하는 함수
  const handleAddSchedule = (newSchedules: Schedule[]) => {
    setFormData({
      ...formData,
      schedules: [...formData.schedules, ...newSchedules],
    });
  };

  // 추가한 일정을 다시 삭제하는 함수
  const handleCancelAddedSchedules = (newSchedules: Schedule[]) => {
    setFormData({
      ...formData,
      schedules: [...newSchedules],
    });
  };

  //배너 이미지 등록
  const handleChangeBannerImage = (imageUrl: string) => {
    setFormData({
      ...formData,
      bannerImageUrl: imageUrl,
    });
  };

  //서브 이미지 변경(추가 및 제거)
  const handleChangeSubImages = (imageUrl: string[]) => {
    setFormData({
      ...formData,
      subImageUrls: imageUrl,
    });
  };

  return (
    <div className="flex w-[792px] flex-col gap-6">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">내 체험 등록</h1>
        <button
          className="rounded bg-gnLightBlack px-4 py-2 text-base font-bold text-white"
          onClick={() => handleActivityRegist(formData)}
        >
          등록하기
        </button>
      </div>
      <ActivityRegistInfo handleFormData={handleAddInfo} />
      <ActivityRegistSchedule
        handleAddSchedule={handleAddSchedule}
        handleCancelAddedSchedules={handleCancelAddedSchedules}
      />
      <ActivityRegistImageUploader
        handleChangeBannerImage={handleChangeBannerImage}
        handleChangeSubImages={handleChangeSubImages}
      />
      {isOpenModal && (
        <ModalAlert
          isOpenModal={isOpenModal}
          message={"등록에 성공했습니다."}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default AcitivyRegistForm;
