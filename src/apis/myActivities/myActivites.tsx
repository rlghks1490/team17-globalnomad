import { instance } from "../apis";
import { GetMyActivitiesParam, GetMyActivitiesRes } from "./myActivities.type";

export const getMyActivities = async ({
  cursorId,
  size,
}: GetMyActivitiesParam) => {
  const cursorParam = cursorId ? `&cursorId=${cursorId}` : "";

  return await instance.get<GetMyActivitiesRes>(
    `/my-activities?size=${size}${cursorParam}`,
  );
};
