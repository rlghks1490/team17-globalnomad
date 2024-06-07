/**
 * @param GetMyReservationsParam /{
  cursorId?: number;
  size?: number;
  status:
    | "pending"
    | "confirmed"
    | "declined"
    | "canceled"
    | "completed"
    | null;
}
 */

export interface GetMyReservationsParam {
  cursorId?: number;
  size?: number;
  status:
    | "pending"
    | "confirmed"
    | "declined"
    | "canceled"
    | "completed"
    | null;
}

/**
 * @param Reservation /{
  id: number;
  teamId: string;
  userId: number;
  activity: {
    bannerImageUrl: string;
    title: string;
    id: number;
  };
  scheduleId: number;
  status: "pending" | "confirmed" | "declined" | "canceled" | "completed";
  reviewSubmitted: boolean;
  totalPrice: number;
  headCount: number;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
}
 */

export interface Reservation {
  id: number;
  teamId: string;
  userId: number;
  activity: {
    bannerImageUrl: string;
    title: string;
    id: number;
  };
  scheduleId: number;
  status: "pending" | "confirmed" | "declined" | "canceled" | "completed";
  reviewSubmitted: boolean;
  totalPrice: number;
  headCount: number;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * @param GetMyReservationsRes /{
  cursorId: number;
  reservations: Reservation[];
  totalCount: number;
 */
export interface GetMyReservationsRes {
  cursorId: number;
  reservations: Reservation[];
  totalCount: number;
}

/**
 * @param PostMyReservationReviewReq /{
  rating: number;
  content: string;
  reservationId: number;
}
 */
export interface PostMyReservationReviewReq {
  rating: number;
  content: string;
  reservationId: number;
}
