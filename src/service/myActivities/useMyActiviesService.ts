import { useQuery } from "@tanstack/react-query";
import queryOptions from "./myActivities.queryOption";

export const useMyActivitiesCheck = () => {
  return useQuery(queryOptions.myActivitiesCheck);
};

export const useMyActivitiesRegistrationDashboard = (activityId: number) => {
  return useQuery(queryOptions.myActivitiesRegistrationDashboard(activityId));
};

export const useMyActivitiesRegistrationSchedule = (activityId: number) => {
  return useQuery(queryOptions.myActivitiesRegistrationSchedule(activityId));
};

export const useMyActivitiesReservationCheck = (activityId: number) => {
  return useQuery(queryOptions.myActivitiesReservationCheck(activityId));
};

export const useMyActivitiesUpdateReservationStatus = (
  activityId: number,
  reservationId: number,
) => {
  return useQuery(
    queryOptions.myActivitiesUpdateReservationStatus(activityId, reservationId),
  );
};

export const useDeleteMyActivities = (activityId: number) => {
  return useQuery(queryOptions.deleteMyActivities(activityId));
};

export const usePatchMyActivities = (activityId: number) => {
  return useQuery(queryOptions.patchMyActivities(activityId));
};
