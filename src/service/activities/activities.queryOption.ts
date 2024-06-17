import ActivitiesService from "./activities.service";
import { ActivitiesRegistration } from "./activities.type";

const queryOptions = {
  activitiesCheck: {
    queryKey: ["activitiesCheck"],
    queryFn: () => ActivitiesService.getActivitiesCheck(),
  },
  activitiesRegistration: {
    mutationKey: ["ActivitiesRegistration"],
    mutationFn: (formData: ActivitiesRegistration) =>
      ActivitiesService.postActivitiesRegistration(formData),
  },
  activitiesDetailCheck: (activityId: number) => ({
    queryKey: ["activitiesDetailCheck", "activityId"],
    queryFn: () => ActivitiesService.getActivitiesDetailCheck(activityId),
  }),
  activitiesReservationCheck: (activityId: number) => ({
    queryKey: ["activitiesReservationCheck", "activityId"],
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
    mutationFn: (formData: FormData) =>
      ActivitiesService.postActivitiesImageUrl(formData),
  },
};

export default queryOptions;
