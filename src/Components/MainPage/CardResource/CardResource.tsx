import Image from "next/image";
import { ICON } from "@/Components/MainPage/constants/importImages";
import { useRouter } from "next/router";

interface GetActivitiesList {
  address: string;
  bannerImageUrl: string;
  category: string;
  createdAt: string;
  description: string;
  id: number;
  price: number;
  rating: number;
  reviewCount: number;
  title: string;
  updatedAt: string;
  userId: number;
}

interface CardResourceProps {
  activitiesData: GetActivitiesList;
  banner: boolean;
}

const CardResource = ({ activitiesData, banner }: CardResourceProps) => {
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/activityDetail/${id}`);
  };

  return (
    <div
      onClick={() => handleClick(activitiesData.id)}
      className={`flex cursor-pointer flex-col gap-4 overflow-hidden ${banner ? "from-card-resource-gradient-from to-card-resource-gradient-to h-96 w-96 flex-col-reverse rounded-2xl bg-gradient-to-b" : ""}`}
    >
      <div
        className={`relative h-72 w-72 overflow-hidden rounded-2xl ${banner ? "absolute left-0 top-0 h-full w-full" : ""}`}
      >
        <Image
          src={activitiesData.bannerImageUrl}
          width={384}
          height={384}
          alt="배너 이미지"
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div
        className={`flex flex-col gap-2 text-black ${banner ? "gap-8 p-8 text-white" : ""}`}
      >
        <div className="flex items-center text-lg font-medium">
          <Image
            src={ICON.star.active.src}
            width={20}
            height={20}
            alt={ICON.star.active.alt}
            className="mr-2"
          />
          {activitiesData.rating}
          &nbsp;
          <span className="text-gray-400">({activitiesData.reviewCount})</span>
        </div>
        <div className="truncate text-2xl font-semibold">
          {activitiesData.title}
        </div>
        <div className="flex items-center text-3xl font-bold">
          {activitiesData.price === 0 ? (
            "무료체험"
          ) : (
            <>
              ￦ {activitiesData.price.toLocaleString()}{" "}
              <span className="text-2xl font-normal text-gnGray500">/ 인</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardResource;
