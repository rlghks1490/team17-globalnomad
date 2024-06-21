import ActivityEditForm from "@/Components/ActivityEdit/ActivityEditForm";
import { useRouter } from "next/router";

const ActivityEdit = () => {
  const router = useRouter();
  const { activityId } = router.query;
  const id = Number(activityId);

  return (
    <>
      <ActivityEditForm activityId={id} />
    </>
  );
};

export default ActivityEdit;
