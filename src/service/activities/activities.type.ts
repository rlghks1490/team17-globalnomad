// 체험 리스트 조회 타입
export interface ActivitiesCheck {}

// 체험 등록 타입
export interface ActivitiesRegistration {}

// 체험 상세 조회 타입
export interface ActivitySchedule {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
}

export interface ActivitySubImage {
  id: number;
  imageUrl: string;
}

export interface ActivitiesDetailCheck {
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
  updatedAt: string;
  subImages: ActivitySubImage[];
  schedules: ActivitySchedule[];
}

// 체험 예약 가능일 조회 타입
export interface ActivitiesReservationCheck {}

// 체험 리뷰 조회 타입
export interface ActivitiesReviewCheck {}

// 체험 예약 신청 타입
export interface ActivitiesReservationRequest {}

// 체험 이미지 url 생성 타입
export interface ActivitiesImageUrl {
  activityImageUrl: string;
}
