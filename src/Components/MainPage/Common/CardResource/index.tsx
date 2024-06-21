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
      className={`flex cursor-pointer flex-col gap-4 overflow-hidden ${banner ? "relative h-96 w-96 flex-col-reverse rounded-2xl bg-gradient-to-b from-gray-300 to-gray-700" : ""}`}
    >
      <div className="relative h-72 w-72 overflow-hidden rounded-2xl">
        <Image
          src={activitiesData.bannerImageUrl}
          width={384}
          height={384}
          alt="배너 이미지"
          className="h-full w-full transform object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div
        className={`flex flex-col gap-4 ${banner ? "gap-8 p-6 text-white" : "w-full text-black"}`}
      >
        <div className="flex items-center gap-2 text-base font-medium">
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
          className={`overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold ${banner ? "w-72 text-3xl font-bold" : ""}`}
        >
          {activitiesData.title}
        </div>
        <div className="flex items-center gap-2 text-2xl font-bold">
          {activitiesData.price === 0 ? (
            "무료체험"
          ) : (
            <>
              ￦ {activitiesData.price.toLocaleString()}{" "}
              <span className="text-lg font-normal text-gray-500">/ 인</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardResource;
