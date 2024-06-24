import ActivitySummary from "./ActivitySummary";
import KebabOptions from "./KebabOptions";
import Kebab from "./Kebab";
import { useUser } from "@/context/UserContext";
import { useAuth } from "@/context/Authcontext";

interface ActivityOverviewHeaderProops {
  userId: number;
  activityId: number;
  title: string;
  category: string;
  address: string;
  rating: number;
  reviewCount: number;
}

const ActivityOverviewHeader = ({
  userId,
  activityId,
  title,
  category,
  address,
  rating,
  reviewCount,
}: ActivityOverviewHeaderProops) => {
  const { user } = useAuth();
  const loginId = user?.user.id;
  return (
    <div className="my-10 flex items-center justify-between">
      <ActivitySummary
        title={title}
        category={category}
        address={address}
        rating={rating}
        reviewCount={reviewCount}
      />
      {loginId === userId && <Kebab activityId={activityId} />}
    </div>
  );
};

export default ActivityOverviewHeader;
