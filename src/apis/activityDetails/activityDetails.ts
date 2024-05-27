import { DataType } from "./activityDetails.type";
import { ReviewData } from "./activityDetails.type";
import { AvailableSchedule } from "./activityDetails.type";

const BASE_URL = "https://sp-globalnomad-api.vercel.app/4-17";

export async function getDatas(): Promise<DataType> {
  const response = await fetch(`${BASE_URL}/activities/907`);
  return await response.json();
}

export async function getReviews(): Promise<ReviewData> {
  const response = await fetch(`${BASE_URL}/activities/907/reviews`);
  return await response.json();
}

export async function getAvaulableSchedule(): Promise<AvailableSchedule> {
  const response = await fetch(`${BASE_URL}/activities/907/available-schedule`);
  return await response.json();
}
