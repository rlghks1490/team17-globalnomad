import ActivitySummary from "./ActivitySummary";
import KebabOptions from "./KebabOptions";
import Kebab from "./Kebab";

interface ActivityOverviewHeaderProops {
  title: string;
  category: string;
  address: string;
  rating: number;
  reviewCount: number;
}

const ActivityOverviewHeader = ({
  title,
  category,
  address,
  rating,
  reviewCount,
}: ActivityOverviewHeaderProops) => {
  return (
    <div className="my-10 flex items-center justify-between">
      <ActivitySummary
        title={title}
        category={category}
        address={address}
        rating={rating}
        reviewCount={reviewCount}
      />
      <Kebab />
    </div>
  );
};

export default ActivityOverviewHeader;
