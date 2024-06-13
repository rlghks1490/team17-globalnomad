import Image from "next/image";
import CommonModal from "./CommonModal";
import CheckIcon from "../../../public/icons/checkIcon.svg";

interface ModalReservationCancelProps {
  isOpenModal: boolean;
  onClose: () => void;
}

const ModalReservationCancel = ({
  isOpenModal,
  onClose,
}: ModalReservationCancelProps) => {
  return (
    <>
      <CommonModal
        isOpenModal={isOpenModal}
        onClose={onClose}
        size="ReservationCancel"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="">
              <Image src={CheckIcon} alt="CheckIcon" width={24} height={24} />
            </div>
            <div className="text-base font-normal text-gnDarkBlack">
              <p>예약을 취소하겠어요?</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <button
              className="border-gnLigthBlack h-[38px] w-20 rounded-md border bg-white text-sm font-bold text-gnLightBlack"
              onClick={onClose}
            >
              아니오
            </button>
            <button className="border-gnLigthBlack h-[38px] w-20 rounded-md border bg-gnLightBlack text-sm font-bold text-white">
              취소하기
            </button>
          </div>
        </div>
      </CommonModal>
    </>
  );
};

export default ModalReservationCancel;
