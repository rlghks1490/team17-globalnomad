import Image from "next/image";
import { ICON } from "@/Components/MainPage/Constants/ImportImages";
import { useRouter } from "next/router";
import { GetActivitiesList } from "@/Components/MainPage/Types/Activities";

interface CardResourceProps {
  activitiesData: GetActivitiesList;
  banner: boolean;
}

const CardResource = ({ activitiesData, banner }: CardResourceProps) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/activity-details/${id}`);
  };

  return (
    <div
      onClick={() => handleClick(activitiesData.id)}
      className={`${banner ? "relative h-[24rem] w-[24rem] cursor-pointer flex-col-reverse overflow-hidden rounded-[1.25rem] bg-gradient-to-b from-transparent to-black mobile:h-[11.6rem] mobile:w-[11.6rem]" : "flex cursor-pointer flex-col gap-[1rem] overflow-hidden"}`}
    >
      <div
        className={`${banner ? "absolute left-0 top-0 z-[-1] h-full w-full overflow-hidden rounded-[1.25rem]" : "pt-full  tablet:pt-full h-[17.7rem]  w-[17.7rem] overflow-hidden rounded-[1.25rem] tablet:relative tablet:w-full"}`}
      >
        <Image
          src={activitiesData.bannerImageUrl}
          width={384}
          height={384}
          alt="배너 이미지"
          className={`${banner ? "absolute h-[24rem] w-[24rem] object-cover duration-300 ease-in-out hover:scale-150 hover:overflow-hidden" : "h-[17.7rem] w-[17.7rem]  object-cover duration-300 ease-in-out hover:scale-125 hover:overflow-hidden tablet:absolute tablet:left-0 tablet:top-0 tablet:h-full tablet:w-full"}`}
        />
      </div>
      <div
        className={`${banner ? "gap-[1.25rem] py-[1.88rem] pl-[1.25rem] pt-[13rem] text-white mobile:gap-[0.38rem] mobile:py-[0.75rem] mobile:pl-[1.25rem]" : "flex w-full flex-col gap-[0.62rem] text-black"}`}
      >
        <div
          className={`${banner ? "flex h-[1.12rem] w-[1.12rem] text-[1rem] font-semibold leading-[1rem] text-white" : "flex items-center text-[1rem] font-medium leading-[1.19rem] text-black"}`}
        >
          <Image
            src={ICON.star.active.src}
            width={20}
            height={20}
            alt={ICON.star.active.alt}
            className="mr-[0.3rem]"
          />
          {activitiesData.rating}
          &nbsp;
          <span className={`${banner ? "text-white" : "text-gray-500"}`}>
            ({activitiesData.reviewCount})
          </span>
        </div>
        <div
          className={`${banner ? "mt-[1.5rem] w-[18.75rem] overflow-hidden text-ellipsis whitespace-nowrap text-[1.88rem] font-bold leading-[3.58rem] mobile:w-[9.12rem] mobile:text-[1.12rem] mobile:font-bold mobile:leading-[1.34rem]" : "mb-[0.31rem] overflow-hidden text-ellipsis text-[1.5rem] font-semibold leading-[1.79rem] mobile:text-[1.1rem] mobile:font-bold mobile:leading-[1.34rem]"}`}
        >
          {activitiesData.title}
        </div>
        <div
          className={`${banner ? "text-[1.5rem] font-bold leading-[3.58rem] mobile:text-[1rem] mobile:leading-[1.18rem]" : "flex items-center gap-[0.31rem] text-[1.75rem] font-extrabold leading-[2.1rem] mobile:text-[1.25rem] mobile:leading-[1.49rem]"}`}
        >
          {activitiesData.price === 0 ? (
            "무료체험"
          ) : (
            <>
              ￦ {activitiesData.price.toLocaleString()}{" "}
              <span
                className={`${banner ? "text-#a1a1a1 text-[0.88rem] font-normal" : "text-[1.25rem] font-normal text-gnGray800 mobile:text-[1rem] mobile:leading-[1.19rem]"}`}
              >
                / 인
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardResource;
