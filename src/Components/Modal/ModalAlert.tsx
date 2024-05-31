import CommonModal from "./CommonModal";

interface ModalAlertProps {
  isOpenModal: boolean;
  onClose: () => void;
  message: string;
}

const ModalAlert = ({ isOpenModal, onClose, message }: ModalAlertProps) => {
  return (
    <>
      <CommonModal isOpenModal={isOpenModal} onClose={onClose}>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="flex grow items-center justify-center pt-[10%] text-lg font-medium">
            {message}
          </div>
          <div className="flex w-full justify-end">
            <button
              className="whitesapce-nowrap mb-7 mr-7 h-12 w-[120px] rounded-lg bg-gnDarkBlack text-base font-medium text-white"
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

export default ModalAlert;
