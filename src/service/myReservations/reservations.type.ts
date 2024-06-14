export type MyReservationsCheck = {};
export type myReservationsCancel = {};
export type myReservationsReviews = {};

export interface MyReservationReviewsReq {
  reservationId: number;
  rating: number;
  content: string;
}
