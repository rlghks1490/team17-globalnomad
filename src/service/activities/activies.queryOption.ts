import ActivitiesService from "./activies.service";

const queryOptions = {
  activitiesCheck: {
    queryKey: ["activitiesCheck"],
    queryFn: () => ActivitiesService.getActivitiesCheck(),
  },
  activitiesRegistration: {
    queryKey: ["ActivitiesRegistration"],
    queryFn: () => ActivitiesService.postActivitiesRegistration(),
  },
  activitiesDetailCheck: (activityId: number) => ({
    queryKey: ["activitiesDetailCheck,activityId"],
    queryFn: () => ActivitiesService.getActivitiesDetailCheck(activityId),
  }),
  activitiesReservationCheck: (activityId: number) => ({
    queryKey: ["activitiesReservationCheck,activityId"],
    queryFn: () => ActivitiesService.getActivitiesReservationCheck(activityId),
  }),
  activitiesReviewCheck: (activityId: number) => ({
    queryKey: ["activitiesReviewCheck"],
    queryFn: () => ActivitiesService.getActivitiesReviewCheck(activityId),
  }),
  activitiesReservationRequest: (activityId: number) => ({
    queryKey: ["activitiesReservationRequest"],
    queryFn: () =>
      ActivitiesService.postActivitiesReservationRequest(activityId),
  }),
  activitiesImageUrl: {
    queryKey: ["activitiesImageUrl"],
    queryFn: () => ActivitiesService.postActivitiesImageUrl(),
  },
};

export default queryOptions;
