// 내 체험 리스트 조회
export interface Activities {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedat: string;
}

export interface MyActivitiesCheck {
  activities: Activities[];
  totalCount: number;
  cursorId: string | null;
}

// 내 체험 월별 예약 현황 조회
export interface Reservation {
  completed: number;
  confirmed: number;
  pending: number;
}

export interface MyActivitiesRegistrationDashboard {
  date: string;
  reservations: Reservation;
}

// 내 체험 날짜별 예약 정보(신청, 승인, 거절)가 있는 스케쥴 조회
export interface Count {
  declined: number;
  confirmed: number;
  pending: number;
}

export interface MyActivitiesRegistrationSchedule {
  scheduleId: number;
  startTime: string;
  endTime: string;
  count: Count;
}

// 내 체험 예약 시간대별 예약 내역 조회
export interface Reservations {
  id: number;
  nickname: string;
  userId: number;
  teamId: string;
  activityId: number;
  scheduleId: number;
  status: string;
  reviewSubmitted: boolean;
  totalPrice: number;
  headCount: number;
  date: string;
  startTime: string;
  endTitme: string;
  createdAt: string;
  updatedAt: string;
}

export interface MyActivitiesReservationCheck {
  cursorId: number;
  totalCount: number;
  reservations: Reservations[];
}

// 내 체험 예약 상태(승인, 거절) 업데이트
export interface MyActivitiesUpdateReservationStatus {}

// 내 체험 삭제
export interface deleteMyActivities {}

// 내 체험 수정
export interface newSchedule {
  date: string;
  startTime: string;
  endTime: string;
}

export interface patchMyActivities {
  title: string;
  category: string;
  description: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  subImageIdsToRemove: number[];
  subImageUrlsToAdd: string[];
  scheduleIdsToRemove: number[];
  schedulesToAdd: newSchedule[];
}
