export type MyActivitiesCheck = {};
export type MyActivitiesRegistrationDashboard = {};
export type MyActivitiesRegistrationSchedule = {};
export type MyActivitiesReservationCheck = {};
export type MyActivitiesUpdateReservationStatus = {};
export type deleteMyActivities = {};

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
