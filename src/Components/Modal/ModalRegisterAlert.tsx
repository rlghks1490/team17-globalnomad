import { useRouter } from "next/router";
import CommonModal from "./CommonModal";

interface ModalRegisterAlertProps {
  isOpenModal: boolean;
  onClose: () => void;
  message: string;
  isSuccess: boolean;
}

const ModalRegisterAlert = ({
  isOpenModal,
  onClose,
  message,
  isSuccess,
}: ModalRegisterAlertProps) => {
  const router = useRouter();

  const handlePageNavigate = () => {
    onClose();
    router.push("/my-page/activities");
  };

  return (
    <>
      <CommonModal
        isOpenModal={isOpenModal}
        onClose={isSuccess ? handlePageNavigate : onClose}
        size="alert"
      >
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="flex w-full grow items-center justify-center text-lg font-medium">
            {message}
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
    </>
  );
};

export default ModalRegisterAlert;
