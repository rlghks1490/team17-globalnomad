import Image from "next/image";
import CommonModal from "./CommonModal";
import CheckIcon from "../../../public/icons/checkIcon.svg";
import { useState } from "react";
import { useDeleteMyActivities } from "@/service/myActivities/useMyActivitiesService";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";

interface ErrorMessage {
  message: string;
}

interface ModalDeleteActivityProps {
  isOpenModal: boolean;
  onClose: () => void;
  activityId: number;
}

const ModalDeleteActivity = ({
  isOpenModal,
  onClose,
  activityId,
}: ModalDeleteActivityProps) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { mutate: deleteActivity } = useDeleteMyActivities();
  const router = useRouter();

  const handleDeleteActivities = (id: number) => {
    deleteActivity(id, {
      onSuccess: () => {
        setIsDeleted(true);
        setIsSuccess(true);
        console.log("삭제 성공");
      },
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<ErrorMessage>;
          setErrorMessage(axiosError.response?.data.message!);
          console.error("삭제 실패", axiosError);
        } else {
          console.error("삭제 실패 - 일반 에러", error);
        }
      },
    });
  };

  const handlePageNavigate = () => {
    onClose();

    if (router.pathname.includes("activity-details")) {
      router.push("/my-page/activities");
    } else if (router.pathname.includes("my-page/activities")) {
      router.reload();
    }
  };

  return (
    <>
      {!isDeleted && !errorMessage ? (
        <CommonModal
          isOpenModal={isOpenModal}
          onClose={onClose}
          size="ReservationCancel"
        >
          <div className="flex flex-col gap-8 ">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="">
                <Image src={CheckIcon} alt="CheckIcon" width={24} height={24} />
              </div>
              <div className="text-base font-normal text-gnDarkBlack">
                <p>체험을 삭제하겠어요?</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <button
                className="border-gnLigthBlack h-[38px] w-20 rounded-md border bg-gnLightBlack text-sm font-bold text-white"
                onClick={() => handleDeleteActivities(activityId)}
              >
                예
              </button>
              <button
                onClick={onClose}
                className="border-gnLigthBlack h-[38px] w-20 rounded-md border bg-white text-sm font-bold text-gnLightBlack"
              >
                아니오
              </button>
            </div>
          </div>
        </CommonModal>
      ) : (
        <CommonModal
          isOpenModal={isOpenModal}
          onClose={isSuccess ? handlePageNavigate : onClose}
          size="alert"
        >
          <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="flex w-full grow items-center justify-center text-lg font-medium">
              {errorMessage ? errorMessage : "삭제 되었습니다."}
            </div>
            <div className="flex w-full justify-end">
              <button
                className="whitesapce-nowrap h-12 w-[120px] rounded-lg bg-gnDarkBlack text-base font-medium text-white"
                onClick={isSuccess ? handlePageNavigate : onClose}
              >
                확인
              </button>
            </div>
          </div>
        </CommonModal>
      )}
    </>
  );
};

export default ModalDeleteActivity;
