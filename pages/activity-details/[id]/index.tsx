import ActivityContent from "@/Components/ActivityDetails/ActivityContent";
import Review from "@/Components/ActivityDetails/Review";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useActivitiesDetailCheck } from "@/service/activities/useActivitiesService";

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

  const { data: response } = useActivitiesDetailCheck(activityId);

  const data = response?.data;

  return (
    <>
      <Head>
        <title>GlobalNomad - {data?.title} </title>
      </Head>
      <ActivityContent activityId={activityId} />
      <Review activityId={activityId} />
    </>
  );
};

export default ActivityDetails;
