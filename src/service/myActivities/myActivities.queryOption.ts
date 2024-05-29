import myActivitiesService from "./myActivities.service";

const queryOptions = {
  myActivitiesCheck: {
    queryKey: ["myActivitiesCheck"],
    queryFn: () => myActivitiesService.getMyActivitiesCheck(),
  },
  myActivitiesRegistrationDashboard: (activityId: number) => ({
    queryKey: ["myActivitiesRegistrationDashboard,activityId"],
    queryFn: () =>
      myActivitiesService.getMyActivitiesRegistrationDashboard(activityId),
  }),
  myActivitiesRegistrationSchedule: (activityId: number) => ({
    queryKey: ["myActivitiesRegistrationSchedule,activityId"],
    queryFn: () =>
      myActivitiesService.getMyActivitiesRegistrationSchedule(activityId),
  }),
  myActivitiesReservationCheck: (activityId: number) => ({
    queryKey: ["myActivitiesReservationCheck,activityId"],
    queryFn: () =>
      myActivitiesService.getMyActivitiesReservationCheck(activityId),
  }),
  myActivitiesUpdateReservationStatus: (
    activityId: number,
    reservationId: number,
  ) => ({
    queryKey: ["myActivitiesUpdateReservationStatus,activityId,reservationId"],
    queryFn: () =>
      myActivitiesService.patchMyActivitiesUpdateReservationStatus(
        activityId,
        reservationId,
      ),
  }),
  deleteMyActivities: (activityId: number) => ({
    queryKey: ["deleteMyActivities,activityId"],
    queryFn: () => myActivitiesService.deleteMyActivities(activityId),
  }),
  patchMyActivities: (activityId: number) => ({
    queryKey: ["patchMyActivities,activityId"],
    queryFn: () => myActivitiesService.patchMyActivities(activityId),
  }),
};

export default queryOptions;
