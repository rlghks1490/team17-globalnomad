import Image from "next/image";
import star from "../../../public/icons/star_on.svg";
import Pagenation from "./Pagenation";
import Comment from "./Comment";
import { useQuery } from "@tanstack/react-query";
import { ReviewData } from "@/apis/activityDetails/activityDetails.type";
import { getReviews } from "@/apis/activityDetails/activityDetails";
import TempComment from "./TempComment";
import { useState } from "react";

const Review = () => {
  const { data } = useQuery<ReviewData>({
    queryKey: ["reviews"],
    queryFn: getReviews,
  });

  function calculateSatisfaction(averageRating: number): string {
    if (averageRating >= 0 && averageRating < 1) {
      return "매우 불만족";
    } else if (averageRating >= 1 && averageRating < 2) {
      return "불만족";
    } else if (averageRating >= 2 && averageRating < 3) {
      return "보통";
    } else if (averageRating >= 3 && averageRating < 4) {
      return "만족";
    } else if (averageRating >= 4 && averageRating <= 5) {
      return "매우 만족";
    } else {
      return "평가 불가";
    }
  }

  const satisfaction = data
    ? calculateSatisfaction(data.averageRating)
    : "아직 후기가 없습니다.";

  const [currentPage, setCurrentPage] = useState<number>(1);
  const contentsPerPage = 3;

  // const totalPages = data ? Math.ceil(data.totalCount / contentsPerPage) : 1;
  const totalPages = Math.ceil(46 / contentsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex w-[1200px] flex-col gap-6">
        <div>
          <h1 className="text-xl font-bold">후기</h1>
        </div>
        <div className="flex flex-row gap-4">
          <div className="text-[50px] font-semibold">{data?.averageRating}</div>
          <div className="flex flex-col gap-2">
            <div className="text-lg font-normal">{satisfaction}</div>
            <div className="flex flex-row gap-1.5 text-sm font-normal">
              <Image src={star} alt="rankIcon" width={15} height={15} />
              {data?.totalCount}개 후기
            </div>
          </div>
        </div>
      </div>
      {data?.reviews.map((review) => (
        <Comment
          key={review.id}
          profileImageUrl={review.user.profileImageUrl}
          nickname={review.user.nickname}
          content={review.content}
          createdAt={review.createdAt}
        />
      ))}
      {/* <TempComment /> */}
      <Pagenation
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Review;
