import { Reservation } from "@/apis/myReservation/myReservation.type";
import Image from "next/image";
import React, { useState } from "react";
import ReservationStatue from "./ReservationStatus";
import { useModal } from "@/hooks/useModal";
import ModalReservationCancel from "../Modal/ModalReservationCancel";
import ModalReview from "../Modal/ModalReview";

interface ReservationListProps {
  data: Reservation;
}

const ReservationList = ({ data }: ReservationListProps) => {
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(
    data.reviewSubmitted,
  );
  const [isReservationCancelled, setIsReservationCancelled] = useState(false);

  const {
    isOpenModal,
    isOpenReviewModal,
    handleReviewModalOpen,
    handleModalOpen,
    handleModalClose,
  } = useModal();

  const bannerImage = data.activity.bannerImageUrl;

  return (
    <div className="shrink- 0 tablet:h-TabletCardList mb-6 flex h-reservationBoxHeight w-reservationBoxWidth gap-6 rounded-3xl shadow-reservationBox tablet:w-reservationTablet">
      <div className=" h-reservationImage w-reservationImage tablet:h-reservationImageTablet tablet:w-reservationImageTablet">
        <Image
          src={bannerImage}
          width={204}
          height={204}
          alt="내 예약내역 배너이미지"
          className="h-full w-full rounded-reservationRadius"
          priority
        />
      </div>
      <div className="my-6 flex flex-col tablet:my-3.5 tablet:w-60">
        <div>
          <ReservationStatue status={data.status} />
          <h1 className="tablet:mb-margin5px mb-3 truncate text-xl font-bold leading-6 tablet:text-lg ">
            {data.activity.title}
          </h1>
          <p className="mb-4 text-lg font-normal leading-6 tablet:text-sm">
            {data.date} · {data.startTime} ~ {data.endTime} · {data.headCount}명
          </p>
        </div>
        <div className="tablet:w-width245px flex w-reservationButtonWidth justify-between">
          <p className="text-2xl font-medium leading-normal tablet:text-xl">
            ₩{data.totalPrice.toLocaleString("ko-KR")}
          </p>
          {data.status === "pending" && !isReservationCancelled && (
            <button
              onClick={() => handleModalOpen()}
              className="mr-6 h-10 w-36 divide-solid rounded-md border border-black px-3 py-2 text-base font-semibold tablet:mr-4 tablet:h-10 tablet:w-28"
            >
              예약취소
            </button>
          )}
          {isOpenModal && (
            <ModalReservationCancel
              isOpenModal={isOpenModal}
              onClose={handleModalClose}
              id={data.id}
              setIsReservationCancelled={setIsReservationCancelled}
            />
          )}
          {data.status === "completed" && !isReviewSubmitted && (
            <button
              disabled={isReviewSubmitted}
              onClick={() => handleReviewModalOpen()}
              className="mr-6 h-10 w-36 rounded-md bg-black px-3 py-2 text-base font-semibold text-white tablet:mr-4 tablet:h-10 tablet:w-28"
            >
              후기작성
            </button>
          )}
          {isOpenReviewModal && (
            <ModalReview
              setIsReviewSubmitted={setIsReviewSubmitted}
              isOpenModal={isOpenReviewModal}
              onClose={handleModalClose}
              data={data}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationList;
