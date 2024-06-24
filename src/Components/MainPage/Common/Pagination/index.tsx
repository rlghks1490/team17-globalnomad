import { Dispatch, SetStateAction } from "react";

interface Props {
  data: {
    totalCount: number;
  };
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  PAGE_LIMIT: number;
}

const Pagination = ({
  data,
  currentPage,
  setCurrentPage,
  PAGE_LIMIT,
}: Props) => {
  const BUTTON_LIMIT = 5;
  const buttonGroup = Math.ceil(currentPage / BUTTON_LIMIT);
  const totalPage = Math.ceil(data.totalCount / PAGE_LIMIT);
  const START_PAGE = (buttonGroup - 1) * BUTTON_LIMIT + 1;

  const handleButtonClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevClick = () => {
    setCurrentPage((old: number) => old - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((old: number) => old + 1);
  };

  return (
    <div className="flex items-center justify-center gap-[0.63rem]">
      <button
        type="button"
        className={`h-[3.44rem] w-[3.44rem] rounded-[0.94rem] border-gnDarkGreen ${currentPage === 1 ? "border-gnGray300" : "border-gnDarkGreen"} 
          ${currentPage === 1 ? 'rotate-0 bg-[url("/icons/paginationPrevIcon.svg")]' : 'rotate-180 bg-[url("/icons/paginationNextIcon.svg")]'} bg-white bg-center bg-no-repeat hover:bg-gnGray200`}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      ></button>
      <div className="flex gap-[0.63rem]">
        {Array(BUTTON_LIMIT)
          .fill(START_PAGE)
          .map((_, i) => {
            const pageNumber = START_PAGE + i;
            if (pageNumber > totalPage) return null;

            return (
              <button
                type="button"
                key={i}
                onClick={() => handleButtonClick(pageNumber)}
                className={`h-[3.44rem] w-[3.44rem] rounded-[0.94rem] border ${pageNumber === currentPage ? "hover:bg-gnGray900 bg-gnDarkGreen text-white" : "bg-white text-gnDarkGreen hover:bg-gnGray200"}`}
              >
                {pageNumber}
              </button>
            );
          })}
      </div>
      <button
        type="button"
        className={`h-[3.44rem] w-[3.44rem] rounded-[0.94rem] border-gnDarkGreen ${currentPage === totalPage ? "border-gnGray300" : "border-gnDarkGreen"} 
          ${currentPage === totalPage ? 'rotate-180 bg-[url("/icons/paginationPrevIcon.svg")]' : 'rotate-0 bg-[url("/icons/paginationNextIcon.svg")]'} bg-white bg-center bg-no-repeat hover:bg-gnGray200`}
        onClick={handleNextClick}
        disabled={currentPage === totalPage}
      ></button>
    </div>
  );
};

export default Pagination;
