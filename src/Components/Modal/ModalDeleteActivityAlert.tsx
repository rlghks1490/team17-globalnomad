import CommonModal from "./CommonModal";

interface ModalDeleteActivityAlertProps {
  isOpenModal: boolean;
  onClose: () => void;
  message: string;
}

const ModalDeleteActivityAlert = ({
  isOpenModal,
  onClose,
  message,
}: ModalDeleteActivityAlertProps) => {
  return (
    <>
      <CommonModal isOpenModal={isOpenModal} onClose={onClose} size="alert">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="flex w-full grow items-center justify-center text-lg font-medium">
            {message}
          </div>
          <div className="flex w-full justify-end">
            <button
              className="whitesapce-nowrap h-12 w-[120px] rounded-lg bg-gnDarkBlack text-base font-medium text-white"
              onClick={onClose}
            >
              확인
            </button>
          </div>
        </div>
      </CommonModal>
    </>
  );
};

export default ModalDeleteActivityAlert;
