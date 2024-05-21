import LoginInput from "@/Components/Input/LoginInput";
import { FormValues, auth } from "@/apis/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from 'axios';
import { useRouter } from "next/router";
import logo from "../../public/icons/logo.svg"
import Image from "next/image";


interface ErrorMessage {
  message: string;
}

const login = () => {
  const router = useRouter();

  const signinMutation = useMutation({
    mutationFn: (data: FormValues) => auth.signin(data),
    mutationKey: ['signin'],
    onSuccess: (data) => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      if (data.accessToken) {
        const accessToken = data.accessToken;
        const refreshToken = data.refreshToken;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        router.push('/');
      }
    },
    onError: (error: AxiosError<ErrorMessage>) => {
      if (error.response && error.response.status >= 400) {
        console.log('AxiosError')
        return;
      }
      console.error('AxiosError', error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    signinMutation.mutate({ email, password });
  };

  return (
    <div className="w-full flex flex-col items-center pt-24 gap-10">
      <div>
        <Image src={logo} alt="글로벌노마드 로고 이미지" />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col w-loginForm gap-7">
        <LoginInput 
          name={'email'}
          label={'이메일'}
          placeholder={'이메일을 입력해 주세요'}
          type={'email'}
          />
          <LoginInput 
          name={'password'}
          label={'비밀번호'}
          placeholder={'비밀번호를 입력해 주세요'}
          type={'password'}
          />
          <button type="submit" className=" h-12 text-base font-bold bg-gnGray600 text-white rounded-md">
            로그인 하기
          </button>
      </form>
    </div>
  );
};

export default login;
