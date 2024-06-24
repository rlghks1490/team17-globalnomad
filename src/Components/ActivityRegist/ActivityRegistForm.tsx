import { useState } from "react";
import ActivityRegistInfo from "./ActicityRegistInfo";
import ActivityRegistImageUploader from "./ActivityRegistImageUploader";
import ActivityRegistSchedule from "./ActivityRegistSchedule";
import { useActivitiesRegistration } from "@/service/activities/useActivitiesService";
import { useModal } from "@/hooks/useModal";
import ModalAlert from "../Modal/ModalAlert";
import Head from "next/head";
import HeadMeta from "../Common/HeadMeta";
import { META_TAG } from "@/constants/metaTag";
import ModalRegisterAlert from "../Modal/ModalRegisterAlert";
import axios, { AxiosError } from "axios";

interface ErrorMessage {
  message: string;
}

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
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const { isOpenModal, handleModalOpen, handleModalClose } = useModal();
  const { mutate: regist } = useActivitiesRegistration();

  const handleActivityRegist = (formData: formDataType) => {
    regist(formData, {
      onSuccess: () => {
        setModalMessage("등록되었습니다.");
        setIsSuccess(true);
        handleModalOpen();
        console.log("등록 성공!");
      },
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<ErrorMessage>;
          setModalMessage(axiosError.response?.data.message!);
          handleModalOpen();
          console.error("삭제 실패", axiosError);
        } else {
          console.error("삭제 실패 - 일반 에러", error);
        }
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
    <>
      <HeadMeta
        title={META_TAG.addMyActivity["title"]}
        description={META_TAG.addMyActivity["description"]}
      />
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
          <ModalRegisterAlert
            isOpenModal={isOpenModal}
            message={modalMessage}
            onClose={handleModalClose}
            isSuccess={isSuccess}
          />
        )}
      </div>
    </>
  );
};

export default AcitivyRegistForm;
