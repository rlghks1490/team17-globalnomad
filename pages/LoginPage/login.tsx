import React, { useState } from "react";
import LoginInput from "@/Components/Input/LoginInput";
import { FormValues, auth } from "@/apis/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/router";

interface ErrorMessage {
  message: string;
}

const login = () => {
  const router = useRouter();
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const signinMutation = useMutation({
    mutationFn: (data: FormValues) => auth.signin(data),
    mutationKey: ["signin"],
    onSuccess: (data) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      if (data.accessToken) {
        const accessToken = data.accessToken;
        const refreshToken = data.refreshToken;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        router.push("/");
      }
    },
    onError: (error: AxiosError<ErrorMessage>) => {
      if (error.response && error.response.status >= 400) {
        console.log("AxiosError");
        return;
      }
      console.error("AxiosError", error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    signinMutation.mutate({ email, password });
  };

  const handleValidate = (name: string, isValid: boolean) => {
    if (name === "email") {
      setIsEmailValid(isValid);
    } else if (name === "password") {
      setIsPasswordValid(isValid);
    }
  };

  const isFormValid = isEmailValid && isPasswordValid;

  return (
    <div className="flex w-full flex-col items-center gap-10 pt-24">
      <div>
        <img src="/icons/logo.svg" alt="글로벌노마드 로고 이미지" />
      </div>
      <form onSubmit={handleSubmit} className="flex w-loginForm flex-col gap-7">
        <LoginInput
          name={"email"}
          label={"이메일"}
          placeholder={"이메일을 입력해 주세요"}
          type={"email"}
          onValidate={handleValidate}
        />
        <LoginInput
          name={"password"}
          label={"비밀번호"}
          placeholder={"비밀번호를 입력해 주세요"}
          type={"password"}
          onValidate={handleValidate}
        />
        <button
          type="submit"
          disabled={!isFormValid}
          className={`h-12 rounded-md text-base font-bold text-white ${isFormValid ? "bg-gnDarkGreen" : "bg-gray-400"}`}
        >
          로그인 하기
        </button>
      </form>
    </div>
  );
};

export default login;
