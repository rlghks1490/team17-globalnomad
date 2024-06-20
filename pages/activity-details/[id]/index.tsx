import ActivityContent from "@/Components/ActivityDetails/ActivityContent";
import Pagenation from "@/Components/ActivityDetails/Pagenation";
import Review from "@/Components/ActivityDetails/Review";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ActivityDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const activityId = Number(id);

  useEffect(() => {
    if (id) {
      console.log(id);
      console.log(typeof id);
    }
  }, [id]);

  return (
    <>
      <ActivityContent activityId={activityId} />
      <Review activityId={activityId} />
    </>
  );
};

export default ActivityDetails;
