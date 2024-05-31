import { ReactNode } from "react";

//체험 상세 데이터
export interface Schedule {
  id: number;
  startTime?: ReactNode;
  endTime?: ReactNode;
  date: string;
  times: {
    id: number;
    startTime: string;
    endTime: string;
  }[];
}

export interface SubImage {
  id: number;
  imageUrl: string;
}

export interface DataType {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  createdAt: string;
  updatedAt: string;
  rating: number;
  reviewCount: number;
  schedules: Schedule[];
  subImages: SubImage[];
}

//리뷰 데이터
export interface User {
  profileImageUrl: string;
  nickname: string;
  id: number;
}

export interface Review {
  id: number;
  user: User;
  activityId: number;
  rating: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewData {
  averageRating: number;
  totalCount: number;
  reviews: Review[];
}

//체험 가능일 데이터

export interface AvailableSchedule {
  date: string;
  times: {
    id: number;
    startTime: string;
    endTime: string;
  }[];
}

//체험 예약 신청 데이터
export interface ResevationRequestData {
  scheduleId: number;
  headCount: number;
}
