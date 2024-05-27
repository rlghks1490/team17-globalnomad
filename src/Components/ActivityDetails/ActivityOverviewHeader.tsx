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

const ActivityOverviewHeader = ({ title, category, address, rating, reviewCount} : ActivityOverviewHeaderProops) => {
  return (
    <div className="flex justify-between items-center my-10">
      <ActivitySummary 
        title={title}
        category={category}
        address={address}
        rating={rating}
        reviewCount={reviewCount}
      />
      <Kebab />
      <KebabOptions />
    </div>
  )
}

export default ActivityOverviewHeader;