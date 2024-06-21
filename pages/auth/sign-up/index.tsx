import React from "react";
import LoginInput from "@/Components/Input/LoginInput";
import { auth } from "@/apis/auth/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { FormValues } from "@/apis/auth/auth.type";
import { useForm } from "react-hook-form";
import { USER_INPUT_VALIDATION } from "@/constants/user";
import EmptyLayout from "@/layouts/EmptyLayout";

interface ErrorMessage {
  message: string;
}
const { email, password, nickname, passwordConfirm } = USER_INPUT_VALIDATION;

const rules = {
  emailRules: {
    required: email.errorMessage.empty,
    pattern: {
      value: email.regex,
      message: email.errorMessage.invalid,
    },
  },
  passwordRules: {
    required: password.errorMessage.empty,
    pattern: {
      value: password.regex,
      message: password.errorMessage.invalid,
    },
    minLength: {
      value: 8,
      message: password.errorMessage.minLength,
    },
    maxLength: {
      value: 16,
      message: password.errorMessage.maxLength,
    },
  },
  nicknameRules: {
    required: nickname.errorMessage.empty,
    pattern: {
      value: nickname.regex,
      message: nickname.errorMessage.invalid,
    },
  },
};

const SignUp = () => {
  const router = useRouter();
  const { formState, register, handleSubmit, getValues } = useForm<FormValues>({
    mode: "onBlur",
  });

  const signUpMutation = useMutation({
    mutationFn: (data: FormValues) => auth.signUp(data),
    mutationKey: ["signUp"],
    onSuccess: () => {
      router.push("/login");
    },
    onError: (error: AxiosError<ErrorMessage>) => {
      if (error.response && error.response.status >= 400) {
        console.log("AxiosError");
        return;
      }
      console.error("AxiosError", error);
    },
  });

  const { isValid, errors } = formState;

  const onSubmit = (data: FormValues) => {
    signUpMutation.mutate(data);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex w-loginForm flex-col items-center pt-24">
        <div>
          <Link href="/">
            <img
              src="/icons/logo.svg"
              alt="글로벌노마드 로고 이미지"
              className="mobile:w-loginLogo"
            />
          </Link>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 flex w-full flex-col gap-7 mobile:min-w-80 mobile:px-3"
        >
          <LoginInput
            label="이메일"
            type="email"
            placeholder="이메일을 입력해 주세요"
            isError={!!errors.email}
            errorMessage={errors.email?.message}
            {...register("email", rules.emailRules)}
          />
          <LoginInput
            label="닉네임"
            type="text"
            placeholder="닉네임을 입력해 주세요"
            isError={!!errors.nickname}
            errorMessage={errors.nickname?.message}
            {...register("nickname", rules.nicknameRules)}
          />
          <LoginInput
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            isError={!!errors.password}
            errorMessage={errors.password?.message}
            {...register("password", rules.passwordRules)}
          />
          <LoginInput
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 한번 더 입력해 주세요"
            isError={!!errors.passwordConfirm}
            errorMessage={errors.passwordConfirm?.message}
            {...register("passwordConfirm", {
              validate: {
                notMatch: (value) => {
                  const { password } = getValues();
                  return (
                    password === value || passwordConfirm?.errorMessage.confirm
                  );
                },
              },
            })}
          />
          <button
            type="submit"
            disabled={!isValid}
            className={`h-12 rounded-md text-base font-bold text-white ${isValid ? "bg-gnDarkGreen" : "bg-gray-400"}`}
          >
            회원가입 하기
          </button>
        </form>
        <div className="mt-8 flex gap-2 text-base font-normal text-gnGray800">
          <p>회원이신가요?</p>
          <Link
            href="/login"
            className="text-base font-normal text-gnDarkGreen underline"
          >
            로그인하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

SignUp.getLayout = function getLayout(page: React.ReactNode) {
  return <EmptyLayout>{page}</EmptyLayout>;
};
