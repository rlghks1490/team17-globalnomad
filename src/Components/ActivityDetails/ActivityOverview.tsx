import ActivityOverviewHeader from "./ActivityOverviewHeader";
import ActivityOverviewImages from "./ActivityOverviewImages";

interface SubImage {
  id: number;
  imageUrl: string;
}

interface ActivityOverviewProps {
  userId: number;
  activityId: number;
  title: string;
  category: string;
  address: string;
  rating: number;
  reviewCount: number;
  bannerImageUrl: string;
  subImages: SubImage[];
}

const ActivityOverview = ({
  userId,
  activityId,
  title,
  category,
  address,
  rating,
  reviewCount,
  bannerImageUrl,
  subImages,
}: ActivityOverviewProps) => {
  return (
    <div className="my-20 flex w-[1200px] flex-col">
      <ActivityOverviewHeader
        userId={userId}
        activityId={activityId}
        title={title}
        category={category}
        address={address}
        rating={rating}
        reviewCount={reviewCount}
      />
      <ActivityOverviewImages
        bannerImageUrl={bannerImageUrl}
        subImages={subImages}
      />
    </div>
  );
};

export default ActivityOverview;
