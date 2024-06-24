import LoginInput from "@/Components/Input/LoginInput";
import { USER_INPUT_VALIDATION } from "@/constants/user";
import { useForm } from "react-hook-form";
import { FormValues } from "@/apis/auth/auth.type";
import { useEffect, useState } from "react";
import {
  useUsersCheckMyInformation,
  useUsersEditMyInformation,
} from "@/service/users/useUsersService";
import { UsersEditMyInformation } from "@/service/users/users.type";
import { useUser } from "@/context/UserContext";
import Toast from "@/Components/Toast/Toast";
import MobileDropDown from "@/Components/MyPage/MobileDropDown";
import HeadMeta from "@/Components/Common/HeadMeta";
import { META_TAG } from "@/constants/metaTag";
import MobileImageChange from "@/Components/MyPage/MobileImageChange";
import MyPageSkeleton from "@/Components/MyPage/MyPageSkeleton";

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

const MyPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid, errors },
    setValue,
  } = useForm<FormValues>({ mode: "onChange" });

  const { data: response, isLoading, isError } = useUsersCheckMyInformation();
  const { mutate: editUserInformation } = useUsersEditMyInformation();
  const { user, setUser } = useUser();
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");

  useEffect(() => {
    if (response && response.data) {
      setValue("email", response.data.email);
      setValue("nickname", response.data.nickname);
    }
  }, [response, setValue]);

  const onSubmit = (formData: FormValues) => {
    const payload: UsersEditMyInformation = {
      nickname: formData.nickname || "",
      newPassword: formData.password,
      profileImageUrl: response?.data.profileImageUrl || "",
    };

    editUserInformation(payload as UsersEditMyInformation, {
      onSuccess: (updateData) => {
        setUser(updateData.data);
        setToastMessage("정보가 성공적으로 수정되었습니다.");
        setShowToast(true);
      },
      onError: (error) => {
        console.error("에러 발생:", error);
        setToastMessage("정보 수정에 실패했습니다.");
        setShowToast(true);
      },
    });
  };

  if (isLoading) {
    return <MyPageSkeleton />;
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
      <HeadMeta title={META_TAG.myPage["title"]} />
      <div className="w-myInfoBoxWidth tablet:w-[30.75rem] mobile:w-[21.438rem]">
        <form
          className="flex flex-col gap-6 tablet:gap-4 mobile:gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-between">
            <div className="flex">
              <h1 className="text-3xl font-bold">내 정보</h1>
              <MobileDropDown />
            </div>
            <button
              type="submit"
              disabled={!isValid}
              className="flex cursor-pointer flex-col items-end gap-6 rounded-md bg-gnDarkGreen px-4 py-2 font-bold leading-6 text-white active:bg-green-950"
            >
              저장하기
            </button>
          </div>
          <MobileImageChange profileImageUrl="" handleChangeImage={() => {}} />
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
              disabled={true}
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
        </form>
      </div>
      {showToast && (
        <Toast onShow={() => setShowToast(false)}>{toastMessage}</Toast>
      )}
    </>
  );
};

export default MyPage;
