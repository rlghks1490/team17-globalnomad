import { ChangeEvent, useState } from "react";
import CommonModal from "./CommonModal";
import Image from "next/image";
import CloseIcon from "../../../public/icons/x_button.svg";
import Star_on from "../../../public/icons/star_on.svg";
import Star_off from "../../../public/icons/star_off.svg";
import { useMyReservationsReviews } from "@/service/myReservations/useReservationsService";
import { Reservation } from "@/apis/myReservation/myReservation.type";

interface ModalReviewProps {
  isOpenModal: boolean;
  onClose: () => void;
  data: Reservation;
  setIsReviewSubmitted: (isReviewSubmitted: boolean) => void;
}

const ModalReview = ({
  isOpenModal,
  onClose,
  data,
  setIsReviewSubmitted,
}: ModalReviewProps) => {
  const [rating, setRating] = useState<number>(0);
  const [content, setContent] = useState("");
  const reservationId = data.id;

  const { mutate: reservationReview } = useMyReservationsReviews(
    reservationId,
    rating,
    content,
  );

  const handleContentValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const handleReviewSubmit = () => {
    setIsReviewSubmitted(true);
    reservationReview();
    onClose();
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      <CommonModal isOpenModal={isOpenModal} onClose={onClose} size="Review">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex w-full justify-between">
            <h2 className="text-[28px] font-bold">후기 작성</h2>
            <button onClick={onClose}>
              <Image src={CloseIcon} alt="CloseButton" width={40} height={40} />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <div>
                <Image
                  src="/images/ActivityIntroductionImage_test2.png"
                  alt="BannerImage"
                  width={126}
                  height={126}
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xl font-bold">{data.activity.title}</div>
                <div className="text-lg font-normal">
                  {data.date} · {data.startTime} ~ {data.endTime} ·
                  {data.headCount}명
                </div>
                <div className="h-px border border-gnDarkBlack border-opacity-10"></div>
                <div className="text-[32px] font-bold">
                  ₩{data.totalPrice.toLocaleString("ko-KR")}
                </div>
              </div>
            </div>
            <form onSubmit={handleReviewSubmit}>
              <div className="gap- flex items-center justify-center">
                {stars.map((_, index) => (
                  <Image
                    key={index}
                    src={index < rating ? Star_on : Star_off}
                    alt="star"
                    width={56}
                    height={56}
                    className="cursor-pointer"
                    onClick={() => handleStarClick(index)}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-6">
                <textarea
                  value={content}
                  onChange={handleContentValue}
                  placeholder="후기를 작성해주세요"
                  className="h-[240px] w-[432px] resize-none rounded border border-gnGray700 p-4"
                />
                <button className="flex h-[56px] w-full items-center justify-center rounded border bg-gnDarkBlack text-base font-bold text-white">
                  작성하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </CommonModal>
    </>
  );
};

export default ModalReview;
