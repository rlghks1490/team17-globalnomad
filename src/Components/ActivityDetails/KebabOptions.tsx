import { useDeleteMyActivities } from "@/service/myActivities/useMyActivitiesService";
import Link from "next/link";

interface KebabOptionsProps {
  activityId: number;
}

const KebabOptions = ({ activityId }: KebabOptionsProps) => {
  const { mutate: deleteActivity } = useDeleteMyActivities();

  const handleDeleteActivituies = (id: number) => {
    deleteActivity(id, {
      onSuccess: () => {
        console.log("삭제 성공");
      },
      onError: (error) => {
        console.error("삭제 실패", error);
      },
    });
  };

  return (
    <div>
      <div className="absolute right-0 z-50 flex flex-col items-center justify-center divide-y rounded-md border border-gnGray300 bg-white shadow-xl">
        <Link href={`/my-page/activities/${activityId}/edit`}>
          <button className="whitespace-nowrap px-11  py-4 text-lg font-medium hover:bg-gnGray200">
            수정하기
          </button>
        </Link>
        <button
          className="whitespace-nowrap px-11 py-4 text-lg font-medium hover:bg-gnGray200"
          onClick={() => handleDeleteActivituies(activityId)}
        >
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default KebabOptions;
