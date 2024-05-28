import axios, { Axios, AxiosError, ResponseType } from "axios";
import { instance } from "../apis";
import { DataType } from "./activityDetails.type";
import { ReviewData } from "./activityDetails.type";
import { AvailableSchedule } from "./activityDetails.type";

const BASE_URL = "https://sp-globalnomad-api.vercel.app/4-17";

// 체험 상세 조회
export async function getDatas(): Promise<DataType> {
  const response = await fetch(`${BASE_URL}/activities/915`);
  return await response.json();
}

export const getActivityDetails = async (activityId: number = 915) => {
  const response = await instance.get(`/activities/${activityId}`);
  const ActivityDetailsData = response.data;
  return ActivityDetailsData;
};

//체험 예약 가능일 조회
export async function getAvailableSchedule(
  year: number,
  month: number,
): Promise<AvailableSchedule> {
  const response = await fetch(`${BASE_URL}/activities/907/available-schedule`);
  return await response.json();
}

export const getSchedule = async (
  year: string,
  month: string,
  activityId: number = 907,
): Promise<AvailableSchedule[]> => {
  const response = await instance.get(
    `/activities/${activityId}/available-schedule`,
    {
      params: {
        year: year,
        month: month,
      },
    },
  );
  const schedule = response.data;
  return schedule;
};

//체험 리뷰 조회
export async function getReviews(): Promise<ReviewData> {
  const response = await fetch(`${BASE_URL}/activities/907/reviews`);
  return await response.json();
}

//체험 예약 신청
export const ReservationRequest = async (activityId: number = 915) => {
  const response = await instance.post(`activities/${activityId}/reservation`);
  const result = response.data;
  return result;
};
