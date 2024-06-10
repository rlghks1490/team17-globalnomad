import ProfileModify from "@/Components/ProfileModify/ProfileModify";
import LoginInput from "@/Components/Input/LoginInput";
import { USER_INPUT_VALIDATION } from "@/constants/user";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { FormValues } from "@/apis/auth/auth.type";
import { useUsersCheckMyInformation, useUsersEditMyInformation } from "@/service/users/useUsersService";
import { disconnect } from "process";

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
  }
};

const index = () => {
  const { register,
          handleSubmit,
          setValue,
          getValues,
          formState: {isValid, errors },
        } = useForm<FormValues>({ mode: "onChange"});

  const { data: response, isLoading, isError} = useUsersCheckMyInformation();
  const { mutate: editUserInformation } = useUsersEditMyInformation();

const onSubmit = (formData: FormValues) => {
  const payload = {
    nickname: formData.nickname || "",
    profileImageUrl: "",
    newPassword: formData.password
  };
  
  editUserInformation(payload, {
    onSuccess: () => {
      alert("정보가 성공적으로 수정되었습니다.");
    },
    onError: () => {
      alert("정보 수정에 실패했습니다.");
    }
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
      <div className="flex px-20 gap-10">
        <ProfileModify />
        <div className="flex flex-col w-full justify-center gap-10 py-10">
          <div className="flex justify-between">
            <div>내 정보</div>
            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              disabled={!isValid}
              className="flex rounded-md active:bg-green-950 leading-6 font-bold flex-col items-end gap-6 py-2 px-4 bg-gnDarkGreen text-white ">
              저장하기
            </button>
          </div>
          <form className="flex flex-col gap-4">
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
              />
              <LoginInput
              label="비밀번호"
              type="password"
              placeholder=""
              isError={!!errors.password}
              errorMessage={errors.password?.message}
              {...register("nickname", rules.passwordRules)}
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
          </form>
        </div>
      </div>
    </>
  );
};

export default index;
