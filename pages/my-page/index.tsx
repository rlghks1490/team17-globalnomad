import LoginInput from "@/Components/Input/LoginInput";
import { USER_INPUT_VALIDATION } from "@/constants/user";
import { useForm } from "react-hook-form";
import { FormValues } from "@/apis/auth/auth.type";
import { useState, useEffect } from "react";
import {
  useUsersCheckMyInformation,
  useUsersEditMyInformation,
} from "@/service/users/useUsersService";
import { UsersEditMyInformation } from "@/service/users/users.type";
import { useUser } from "@/context/UserContext";

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
  passwordConfirm: {
    required: passwordConfirm.errorMessage.confirm,
  },
};

const myPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid, errors },
  } = useForm<FormValues>({ mode: "onChange" });

  const { data: response, isLoading, isError } = useUsersCheckMyInformation();
  const { mutate: editUserInformation } = useUsersEditMyInformation();
  const { user, setUser } = useUser();

  useEffect(() => {
    if (response && response.data) {
      setUser(response.data);
    }
  }, [response, setUser]);

  const onSubmit = (formData: FormValues) => {
    const payload: {
      nickname: string;
      newPassword?: string;
      profileImageUrl?: string;
    } = {
      nickname: formData.nickname || "",
      newPassword: formData.password,
    };

    editUserInformation(payload as UsersEditMyInformation, {
      onSuccess: (updateData) => {
        setUser(updateData.data);
        alert("정보가 성공적으로 수정되었습니다.");
      },
      onError: (error) => {
        console.error("에러 발생:", error);
        alert("정보 수정에 실패했습니다.");
      },
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  if (!response) {
    return <div>Not Found data...</div>;
  }

  const data = response.data;

  return (
    <>
      <div className="flex w-myInfoBoxWidth gap-10">
        <div className="flex h-screen w-full flex-col gap-10  tablet:pb-10">
          <form className="flex justify-between">
            <div className=" text-3xl font-bold ">내 정보</div>
            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              disabled={!isValid}
              className="flex cursor-pointer flex-col items-end gap-6 rounded-md bg-gnDarkGreen px-4 py-2 font-bold leading-6 text-white active:bg-green-950 "
            >
              저장하기
            </button>
          </form>
          <div className="flex flex-col gap-4">
            <LoginInput
              label="닉네임"
              type="text"
              placeholder={data.nickname}
              isError={!!errors.nickname}
              errorMessage={errors.nickname?.message}
              {...register("nickname", rules.nicknameRules)}
            />
            <LoginInput
              label="이메일"
              type="email"
              placeholder={data.email}
              isError={!!errors.email}
              errorMessage={errors.email?.message}
              {...register("email", rules.emailRules)}
              // disabled={true}
            />
            <LoginInput
              label="비밀번호"
              type="password"
              placeholder="8자 이상 입력해 주세요"
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
                      password === value ||
                      passwordConfirm?.errorMessage.confirm
                    );
                  },
                },
              })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default myPage;
