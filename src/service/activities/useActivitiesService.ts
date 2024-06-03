import { useMutation, useQuery } from "@tanstack/react-query";
import queryOptions from "./activities.queryOption";

export const useActivitiesCheck = () => {
  return useQuery(queryOptions.activitiesCheck);
};

export const useActivitiesRegistration = () => {
  return useMutation(queryOptions.activitiesRegistration);
};

export const useActivitiesDetailCheck = (activityId: number) => {
  return useQuery(queryOptions.activitiesDetailCheck(activityId));
};

export const useActivitiesReservationCheck = (activityId: number) => {
  return useQuery(queryOptions.activitiesReservationCheck(activityId));
};

export const useActivitiesReviewCheck = (activityId: number) => {
  return useQuery(queryOptions.activitiesReviewCheck(activityId));
};

export const useActivitiesReservationRequest = (activityId: number) => {
  return useMutation(queryOptions.activitiesReservationRequest(activityId));
};

export const useActivitiesImageUrl = () => {
  return useMutation(queryOptions.activitiesImageUrl);
};
