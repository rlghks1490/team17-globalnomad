import ActivitiesService from "./activities.service";
import { ActivitiesRegistration } from "./activities.type";

const queryOptions = {
  activitiesCheck: {
    queryKey: ["activitiesCheck"],
    queryFn: () => ActivitiesService.getActivitiesCheck(),
    staleTime: 3 * 60 * 1000,
  },
  activitiesRegistration: {
    mutationKey: ["ActivitiesRegistration"],
    mutationFn: (formData: ActivitiesRegistration) =>
      ActivitiesService.postActivitiesRegistration(formData),
    staleTime: 3 * 60 * 1000,
  },
  activitiesDetailCheck: (activityId: number) => ({
    queryKey: ["activitiesDetailCheck", "activityId"],
    queryFn: () => ActivitiesService.getActivitiesDetailCheck(activityId),
    staleTime: 3 * 60 * 1000,
  }),
  activitiesReservationCheck: (activityId: number) => ({
    queryKey: ["activitiesReservationCheck", "activityId"],
    queryFn: () => ActivitiesService.getActivitiesReservationCheck(activityId),
    staleTime: 3 * 60 * 1000,
  }),
  activitiesReviewCheck: (activityId: number) => ({
    queryKey: ["activitiesReviewCheck"],
    queryFn: () => ActivitiesService.getActivitiesReviewCheck(activityId),
    staleTime: 3 * 60 * 1000,
  }),
  activitiesReservationRequest: (activityId: number) => ({
    mutationKey: ["activitiesReservationRequest"],
    mutationFn: () =>
      ActivitiesService.postActivitiesReservationRequest(activityId),
    staleTime: 3 * 60 * 1000,
  }),
  activitiesImageUrl: {
    mutationKey: ["activitiesImageUrl"],
    mutationFn: (formData: FormData) =>
      ActivitiesService.postActivitiesImageUrl(formData),
    staleTime: 3 * 60 * 1000,
  },
};

export default queryOptions;
