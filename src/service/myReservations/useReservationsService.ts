import { useQuery } from "@tanstack/react-query";
import queryOptions from "./reservations.queryOption";

export const useMyReservationsCheck = () => {
  return useQuery(queryOptions.myReservationsCheck);
};

export const useMyReservationsCancel = (reservationId: number) => {
  return useQuery(queryOptions.myReservationsCancel(reservationId));
};

export const useMyReservationsReviews = (reservationId: number) => {
  return useQuery(queryOptions.myReservationsReviews(reservationId));
};
