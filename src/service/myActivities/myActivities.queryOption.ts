import myActivitiesService from "./myActivities.service";
import {
  MyActivitiesUpdateReservationStatus,
  patchMyActivities,
} from "./myActivities.type";

const queryOptions = {
  myActivitiesCheck: {
    queryKey: ["myActivitiesCheck"],
    queryFn: () => myActivitiesService.getMyActivitiesCheck(),
  },
  myActivitiesRegistrationDashboard: (
    year: string,
    month: string,
    activityId: number,
  ) => ({
    queryKey: ["myActivitiesRegistrationDashboard", "activityId"],
    queryFn: () =>
      myActivitiesService.getMyActivitiesRegistrationDashboard(
        year,
        month,
        activityId,
      ),
  }),
  myActivitiesRegistrationSchedule: (date: string, activityId: number) => ({
    queryKey: ["myActivitiesRegistrationSchedule", "activityId"],
    queryFn: () =>
      myActivitiesService.getMyActivitiesRegistrationSchedule(date, activityId),
  }),
  myActivitiesReservationCheck: (
    scheduleId: number,
    status: string,
    activityId: number,
  ) => ({
    queryKey: ["myActivitiesReservationCheck", "activityId"],
    queryFn: () =>
      myActivitiesService.getMyActivitiesReservationCheck(
        scheduleId,
        status,
        activityId,
      ),
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
    mutationFn: (status: MyActivitiesUpdateReservationStatus) =>
      myActivitiesService.patchMyActivitiesUpdateReservationStatus(
        activityId,
        reservationId,
        status,
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
