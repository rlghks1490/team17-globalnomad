import { useModal } from "@/hooks/useModal";
import { useDeleteMyActivities } from "@/service/myActivities/useMyActivitiesService";
import Link from "next/link";
import ModalDeleteActivity from "../Modal/ModalDeleteActivity";
import { useState } from "react";
import ModalDeleteActivity2 from "../Modal/ModalDeleteActivity2";

interface KebabOptionsProps {
  activityId: number;
}

const KebabOptions = ({ activityId }: KebabOptionsProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { mutate: deleteActivity } = useDeleteMyActivities();
  const { isOpenModal, handleModalOpen, handleModalClose } = useModal();

  const handleDeleteActivities = (id: number) => {
    deleteActivity(id, {
      onSuccess: () => {
        console.log("삭제 성공");
        handleModalOpen();
      },
      onError: (error) => {
        console.error("삭제 실패", error);
        setErrorMessage(error.message);
        console.log(errorMessage);
        handleModalOpen();
      },
    });
  };

  // () => handleDeleteActivities(activityId)
  return (
    <div>
      <div className="absolute right-0 z-50 flex flex-col items-center justify-center divide-y rounded-md border border-gnGray300 bg-white shadow-xl">
        <Link href={`/my-page/activities/${activityId}/edit`}>
          <button className="whitespace-nowrap px-11  py-4 text-lg font-medium hover:bg-gnGray200">
            수정하기
          </button>
        </Link>
        <button
          className="whitespace-nowrap px-11 py-4 text-lg font-medium hover:bg-gnGray200"
          onClick={() => handleDeleteActivities(activityId)}
        >
          삭제하기
        </button>
      </div>
      {isOpenModal && (
        // <ModalDeleteActivity
        //   isOpenModal={isOpenModal}
        //   onClose={handleModalClose}
        //   activityId={activityId}
        // />
        <ModalDeleteActivity2
          isOpenModal={isOpenModal}
          onClose={handleModalClose}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
};

export default KebabOptions;
