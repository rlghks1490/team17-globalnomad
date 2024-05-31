import { useState } from "react";
import CommonModal from "./CommonModal";
import Image from "next/image";
import CloseIcon from "../../../public/icons/x_button.svg";
import Star_on from "../../../public/icons/star_on.svg";
import Star_off from "../../../public/icons/star_off.svg";

interface ModalReviewProps {
  isOpenModal: boolean;
  onClose: () => void;
}

const ModalReview = ({ isOpenModal, onClose }: ModalReviewProps) => {
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      <CommonModal isOpenModal={isOpenModal} onClose={onClose}>
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
                <div className="text-xl font-bold">
                  함께 배우는 즐거운 스트릿 댄스
                </div>
                <div className="text-lg font-normal">
                  2023.2.14 · 11:00 - 12:30 · 10명
                </div>
                <div className="h-px border border-gnDarkBlack border-opacity-10"></div>
                <div className="text-[32px] font-bold">￦ 10,000</div>
              </div>
            </div>
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
                placeholder="후기를 작성해주세요"
                className="h-[240px] w-[432px] resize-none rounded border border-gnGray700"
              />
              <button className="flex h-[56px] w-full items-center justify-center rounded border bg-gnDarkBlack text-base font-bold text-white">
                작성하기
              </button>
            </div>
          </div>
        </div>
      </CommonModal>
    </>
  );
};

export default ModalReview;
