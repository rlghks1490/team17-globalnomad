import Image from "next/image";
import { useState } from "react";
import Arrow_backward from "../../../public/icons/pagenationArrow_backward.svg";
import Arrow_backward_disabled from "../../../public/icons/pagenationArrow_backward_disabled.svg";
import Arrow_forward from "../../../public/icons/pagenationArrow_forward.svg";
import Arrow_forward_disabled from "../../../public/icons/pagenationArrow_forward_disabled.svg";

interface PagenationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagenation = ({
  currentPage,
  totalPages,
  onPageChange,
}: PagenationProps) => {
  const [start, setStart] = useState<number>(1);
  const pageCount = 5;
  const noPrev = start === 1;
  const noNext = start + pageCount - 1 >= totalPages;

  const goToPreviousPageList = () => {
    if (currentPage > 1) {
      onPageChange(start - 1);
      setStart(start - pageCount);
    }
  };

  const goToNextPageList = () => {
    if (currentPage < totalPages) {
      onPageChange(start + pageCount);
      setStart(start + pageCount);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={goToPreviousPageList}
        disabled={noPrev}
        className={`flex h-[55px] w-[55px] items-center justify-center rounded-[15px] border px-[17px] py-[17px] ${noPrev ? "border-gnGray300" : "border-gnDarkGreen"}`}
      >
        {noPrev ? (
          <Image
            src={Arrow_backward_disabled}
            alt="backwardButton_disabled"
            width={22}
            height={22}
            priority
          />
        ) : (
          <Image
            src={Arrow_backward}
            alt="backwardButton"
            width={22}
            height={22}
            priority
          />
        )}
      </button>

      {[...Array(pageCount)].map((_, i) => (
        <>
          {start + i <= totalPages && (
            <button
              key={i}
              onClick={() => onPageChange(start + i)}
              className={`flex h-[55px] w-[55px] items-center justify-center rounded-[15px] border border-gnDarkGreen px-[17px] py-[17px] text-lg font-normal ${currentPage === start + i ? "bg-gnDarkGreen text-white" : " bg-white text-gnDarkGreen"}`}
            >
              {start + i}
            </button>
          )}
        </>
      ))}

      <button
        onClick={goToNextPageList}
        disabled={noNext}
        className={`flex h-[55px] w-[55px] items-center justify-center rounded-[15px] border px-[17px] py-[17px] ${noNext ? "border-gnGray300" : "border-gnDarkGreen"}`}
      >
        {noNext ? (
          <Image
            src={Arrow_forward_disabled}
            alt="forwardButton_disabled"
            width={22}
            height={22}
            priority
          />
        ) : (
          <Image
            src={Arrow_forward}
            alt="forwardButton"
            width={22}
            height={22}
            priority
          />
        )}
      </button>
    </div>
  );
};

export default Pagenation;
