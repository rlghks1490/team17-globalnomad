import myActivitiesService from "./myActivities.service";
import { patchMyActivities } from "./myActivities.type";

const queryOptions = {
  myActivitiesCheck: {
    queryKey: ["myActivitiesCheck"],
    queryFn: () => myActivitiesService.getMyActivitiesCheck(),
  },
  myActivitiesRegistrationDashboard: (activityId: number) => ({
    queryKey: ["myActivitiesRegistrationDashboard", "activityId"],
    queryFn: () =>
      myActivitiesService.getMyActivitiesRegistrationDashboard(activityId),
  }),
  myActivitiesRegistrationSchedule: (activityId: number) => ({
    queryKey: ["myActivitiesRegistrationSchedule", "activityId"],
    queryFn: () =>
      myActivitiesService.getMyActivitiesRegistrationSchedule(activityId),
  }),
  myActivitiesReservationCheck: (activityId: number) => ({
    queryKey: ["myActivitiesReservationCheck", "activityId"],
    queryFn: () =>
      myActivitiesService.getMyActivitiesReservationCheck(activityId),
  }),
  myActivitiesUpdateReservationStatus: (
    activityId: number,
    reservationId: number,
  ) => ({
    mutationKey: [
      "myActivitiesUpdateReservationStatus",
      "activityId",
      "reservationId",
    ],
    mutationFn: () =>
      myActivitiesService.patchMyActivitiesUpdateReservationStatus(
        activityId,
        reservationId,
      ),
  }),
  deleteMyActivities: (activityId: number) => ({
    mutationKey: ["deleteMyActivities", "activityId"],
    mutationFn: () => myActivitiesService.deleteMyActivities(activityId),
  }),
  patchMyActivities: (activityId: number) => ({
    mutationKey: ["patchMyActivities", "activityId"],
    mutationFn: (formData: patchMyActivities) =>
      myActivitiesService.patchMyActivities(activityId, formData),
  }),
};

export default queryOptions;
