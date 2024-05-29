import ActivitiesService from "./activities.service";

const queryOptions = {
  activitiesCheck: {
    queryKey: ["activitiesCheck"],
    queryFn: () => ActivitiesService.getActivitiesCheck(),
  },
  activitiesRegistration: {
    mutationKey: ["ActivitiesRegistration"],
    mutationFn: () => ActivitiesService.postActivitiesRegistration(),
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
    mutationKey: ["activitiesReservationRequest"],
    mutationFn: () =>
      ActivitiesService.postActivitiesReservationRequest(activityId),
  }),
  activitiesImageUrl: {
    mutationKey: ["activitiesImageUrl"],
    mutationFn: () => ActivitiesService.postActivitiesImageUrl(),
  },
};

export default queryOptions;
