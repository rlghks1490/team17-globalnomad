const BASE_URL =  "https://sp-globalnomad-api.vercel.app/4-17";

export async function getDatas() {
  const response= await fetch(`${BASE_URL}/activities/907`)
  return await response.json();
}