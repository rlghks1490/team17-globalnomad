import { ICON, IMAGE } from "@/Components/MainPage/Constants/ImportImages";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [bannerList, setBannerList] = useState<
    { imageSrc: StaticImageData; title: string; text: string }[]
  >([]);
  const [isHover, setIsHover] = useState(false);

  const bannerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const bannerImageList = [
      {
        imageSrc: IMAGE.banner.first.src,
        title: "우선 떠나는 여행",
        text: "여행을 시작했다면 액티비티 선택에 도움을 드립니다",
      },
      {
        imageSrc: IMAGE.banner.second.src,
        title: "버튼 하나로 예약 완료",
        text: "원하는 여행지에 따라 손 쉽게 여행 예약까지 한번에",
      },
      {
        imageSrc: IMAGE.banner.third.src,
        title: "같이 떠날 체험자 ",
        text: "여행을 함께할 체험자를 만나기 위해 체험 소개와 등록까지",
      },
    ];

    const startData = bannerImageList[0];
    const endData = bannerImageList[2];
    const newList = [endData, ...bannerImageList, startData];

    setBannerList(newList);
  }, []);

  useEffect(() => {
    if (bannerRef.current !== null) {
      bannerRef.current.style.transform = `translateX(-${currentIndex}00%)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHover) {
        const newIndex = currentIndex + 1;

        if (newIndex === 4) {
          moveToNthBanner(1);
        }

        setCurrentIndex((prevCurrentIndex) => prevCurrentIndex + 1);

        if (bannerRef.current !== null) {
          bannerRef.current.style.transition = "all 0.5s ease-in-out";
        }
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, isHover]);

  const moveToNthBanner = (index: number) => {
    setTimeout(() => {
      setCurrentIndex(index);
      if (bannerRef.current !== null) {
        bannerRef.current.style.transition = "";
      }
    }, 500);
  };

  const handleSwipeClick = (direction: number) => {
    const newIndex = currentIndex + direction;

    if (newIndex === 4) {
      moveToNthBanner(1);
    }

    if (newIndex === 0) {
      moveToNthBanner(3);
    }

    setCurrentIndex((prevCurrentIndex) => prevCurrentIndex + direction);

    if (bannerRef.current !== null) {
      bannerRef.current.style.transition = "all 0.5s ease-in-out";
    }
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className="absolute left-0 right-0 flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full overflow-hidden">
        <button
          onClick={() => handleSwipeClick(-1)}
          className="absolute left-[0.6rem] top-[45%] z-10 block rounded-[0.63rem] opacity-60 hover:opacity-100"
        >
          <Image
            src={ICON.leftArrow.variant1.src}
            alt="이전 배너"
            height={47}
            width={24}
          />
        </button>
        <button
          onClick={() => handleSwipeClick(1)}
          className="absolute right-[0.6rem] top-[45%] z-10 block rotate-180 rounded-[0.63rem] opacity-60 hover:opacity-100"
        >
          <Image
            src={ICON.leftArrow.variant1.src}
            alt="다음 배너"
            height={47}
            width={24}
          />
        </button>
        <ul className="flex w-full" ref={bannerRef}>
          {bannerList.map((banner, index) => (
            <li
              className="transition-border relative h-[34.38rem] w-full flex-none overflow-hidden px-8 duration-300"
              key={`${banner.title}-${index}`}
            >
              <div className="absolute inset-0 min-h-full min-w-full">
                <Image
                  src={banner.imageSrc}
                  alt="배너 이미지"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="relative left-[8rem] top-[13rem] z-10 flex w-[39rem] flex-col gap-[0.8rem] align-baseline text-white">
                <span className="text-7xl font-bold leading-tight text-white">
                  {banner.title}
                </span>
                <span className="text-2xl font-bold text-white">
                  {banner.text}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:h-[15rem] h-[34.38rem]" />
    </div>
  );
};

export default Banner;
