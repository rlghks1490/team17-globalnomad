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
      className={`${banner ? "from-#00000000 to-#000000cc relative h-[24rem] w-[24rem] cursor-pointer flex-col-reverse overflow-hidden bg-gradient-to-b mobile:h-[11.6rem] mobile:w-[11.6rem]" : "flex cursor-pointer flex-col gap-[1rem] overflow-hidden"}`}
    >
      <div
        className={`${banner ? "absolute left-0 top-0 z-[-1] h-full w-full overflow-hidden rounded-[1.25rem]" : "pt-full h-[17.7rem] w-[17.7rem] overflow-hidden rounded-[1.25rem] tablet:relative tablet:h-auto tablet:w-full"}`}
      >
        <Image
          src={activitiesData.bannerImageUrl}
          width={384}
          height={384}
          alt="배너 이미지"
          className={`${banner ? "absolute h-full w-full object-cover object-cover duration-300 ease-in-out hover:scale-125 hover:overflow-hidden" : "h-[17.7rem] w-[17.7rem] object-cover duration-300 ease-in-out hover:scale-125 hover:overflow-hidden tablet:absolute tablet:left-0 tablet:top-0 tablet:h-full tablet:w-full"}`}
        />
      </div>
      <div
        className={`${banner ? "gap-[1.25rem] pl-[1.25rem] pt-[1.88rem] text-white mobile:pl-[1.25rem] mobile:pt-[0.75rem]" : "flex w-full flex-col gap-[0.62rem] text-black"}`}
      >
        <div
          className={`${banner ? "h-[1.12rem] w-[1.12rem] text-[1rem] font-semibold leading-4 text-white" : ""}`}
        >
          <Image
            src={ICON.star.active.src}
            width={20}
            height={20}
            alt={ICON.star.active.alt}
          />
          {activitiesData.rating}
          &nbsp;
          <span className={`${banner ? "text-white" : "text-gray-500"}`}>
            ({activitiesData.reviewCount})
          </span>
        </div>
        <div
          className={`${banner ? "text-[1.25rem] font-bold leading-[2.23rem] mobile:w-[9.12rem] mobile:text-[1.12rem] mobile:leading-[1.34rem]" : ""}`}
        >
          {activitiesData.title}
        </div>
        <div
          className={`${banner ? "w-[18.75rem] text-[1.88rem] font-bold leading-[1.49rem] mobile:text-[1rem] mobile:leading-[1.18rem]" : ""}`}
        >
          {activitiesData.price === 0 ? (
            "무료체험"
          ) : (
            <>
              ￦ {activitiesData.price.toLocaleString()}{" "}
              <span
                className={`${banner ? "text-#a1a1a1 text-[0.88rem] font-normal" : ""}`}
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
