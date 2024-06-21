import CardResource from "@/Components/MainPage/Common/CardResource";
import { ICON } from "@/Components/MainPage/Constants/ImportImages";
import useResponsiveSize from "@/Components/MainPage/Hooks/useResponsiveSize";
import { GetActivitiesList } from "@/Components/MainPage/Types/Activities";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface PopularActivitiesListProps {
  popularActivities?: GetActivitiesList[];
}

const PopularActivitiesList = ({
  popularActivities,
}: PopularActivitiesListProps) => {
  const ref = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const [hasPrev, setHasPrev] = useState(false);
  const size = useResponsiveSize(10, 12, 0, 0);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.style.transition = "all 0.5s ease-in-out";
    }
  }, []);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.style.transform = `translateX(-${currentIndex}0%)`;
    }
  }, [currentIndex]);

  const handleArrowButtonClick = (direction: number) => {
    const newIndex = currentIndex + direction;

    if (newIndex >= 0 && newIndex <= 7) {
      setCurrentIndex(newIndex);
      setHasPrev(newIndex !== 0);
      setHasNext(newIndex !== 7);
    }
  };

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-3xl font-bold text-black">🔥 인기 체험</h2>
        <div className="flex">
          <button
            className="flex disabled:cursor-default disabled:opacity-60"
            onClick={() => handleArrowButtonClick(-1)}
            disabled={!hasPrev}
          >
            <Image
              src={ICON.leftArrow.default.src}
              alt={ICON.leftArrow.default.alt}
              height={48}
              width={48}
            />
          </button>
          <button
            className="flex rotate-180 disabled:cursor-default disabled:opacity-60"
            onClick={() => handleArrowButtonClick(1)}
            disabled={!hasNext}
          >
            <Image
              src={ICON.leftArrow.default.src}
              alt={ICON.leftArrow.default.alt}
              height={48}
              width={48}
            />
          </button>
        </div>
      </div>
      <div className="flex w-full items-center justify-start overflow-hidden">
        <ul className="flex gap-4" ref={ref}>
          {popularActivities?.map((popularActivity) => (
            <li key={popularActivity.id} className="flex">
              <CardResource activitiesData={popularActivity} banner={true} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularActivitiesList;
