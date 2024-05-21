import axios from 'axios';

export interface FormValues {
  email: string;
  nickname?: string;
  password: string;
  passwordConfirm?: string;
}

export const instance = axios.create({
  baseURL: 'https://sp-globalnomad-api.vercel.app/4-17',
});

export const auth ={
  signin: async (userData: FormValues) => {
    const response = await instance.post('/auth/login', userData);
    return response.data;
  }
}

