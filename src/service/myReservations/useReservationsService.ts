import { useMutation, useQuery } from "@tanstack/react-query";
import queryOptions from "./reservations.queryOption";
import { MyReservationReviewsReq } from "./reservations.type";

export const useMyReservationsCheck = () => {
  return useQuery(queryOptions.myReservationsCheck);
};

export const useMyReservationsCancel = (reservationId: number) => {
  return useMutation(queryOptions.myReservationsCancel(reservationId));
};

export const useMyReservationsReviews = (
  reservationId: number,
  rating: number,
  content: string,
) => {
  return useMutation(
    queryOptions.myReservationsReviews(reservationId, rating, content),
  );
};
