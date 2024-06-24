import Image from "next/image";
import CommonModal from "./CommonModal";
import CheckIcon from "../../../public/icons/checkIcon.svg";
import { useEffect, useState } from "react";
import { useDeleteMyActivities } from "@/service/myActivities/useMyActivitiesService";
import { useRouter } from "next/router";

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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { mutate: deleteActivity } = useDeleteMyActivities();
  const router = useRouter();

  const handleDeleteActivities = (id: number) => {
    deleteActivity(id, {
      onSuccess: () => {
        setIsDeleted(true);
        console.log("삭제 성공");
      },
      onError: (error) => {
        setErrorMessage(error.message);
        console.error("삭제 실패", error);
      },
    });
  };

  const handlePageNavigate = () => {
    onClose();

    if (router.pathname.includes("activity-details")) {
      router.push("/");
    } else if (router.pathname.includes("my-page/activities")) {
      router.reload();
    }
  };

  useEffect(() => {
    setIsDeleted(false);
    setErrorMessage(null);
  }, [isOpenModal]);

  console.log(activityId);
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
        <CommonModal isOpenModal={isOpenModal} onClose={onClose} size="alert">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="flex w-full grow items-center justify-center text-lg font-medium">
              {errorMessage ? errorMessage : "삭제 되었습니다."}
            </div>
            <div className="flex w-full justify-end">
              <button
                className="whitesapce-nowrap h-12 w-[120px] rounded-lg bg-gnDarkBlack text-base font-medium text-white"
                onClick={handlePageNavigate}
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
