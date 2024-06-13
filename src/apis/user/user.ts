import { instance } from "../apis";
import { PostSignupReq } from "./user.type";

const fetchUserProfile = async () => {
  const response = await fetch(
    `https://sp-globalnomad-api.vercel.app/4-17/users/me`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzA3LCJ0ZWFtSWQiOiI0LTE3IiwiaWF0IjoxNzE2NTI3MTI0LCJleHAiOjE3MTY1Mjg5MjQsImlzcyI6InNwLWdsb2JhbG5vbWFkIn0.b7Zoba6FbVyYhJzvcfgB-SYjAryROQSZogssFTAymRk",
      },
    },
  );

  if (!response.ok) {
    console.error("응답을 받지 못했습니다");
  }

  const data = await response.json();
  return data;
};

export default fetchUserProfile;

export const postSignup = async (userData: PostSignupReq) => {
  await instance.post(`/users`, userData);
  return {
    email: userData.email,
    password: userData.password,
  };
};
