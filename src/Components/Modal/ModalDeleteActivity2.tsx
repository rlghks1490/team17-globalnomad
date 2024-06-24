import Image from "next/image";
import CommonModal from "./CommonModal";
import CheckIcon from "../../../public/icons/checkIcon.svg";
import { useEffect, useState } from "react";
import { useDeleteMyActivities } from "@/service/myActivities/useMyActivitiesService";
import { useRouter } from "next/router";

interface ModalDeleteActivityProps {
  isOpenModal: boolean;
  onClose: () => void;
  errorMessage: string | null;
}

const ModalDeleteActivity2 = ({
  isOpenModal,
  onClose,
}: ModalDeleteActivityProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handlePageNavigate = () => {
    // onClose();
    router.push("/");

    // if (router.pathname.includes("activity-details")) {
    //   router.push("/");
    //   console.log("페이지 이동");
    // } else if (router.pathname.includes("my-page/activities")) {
    //   router.reload();
    //   console.log("페이지 이동");
    // }
  };

  return (
    <>
      <CommonModal
        isOpenModal={isOpenModal}
        onClose={handlePageNavigate}
        size="alert"
      >
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
    </>
  );
};

export default ModalDeleteActivity2;
