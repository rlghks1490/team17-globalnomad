import GuestHeader from "@/Components/Common/GuestHeader/GuestHeader";
import LoginHeader from "@/Components/Common/LoginHeader/LoginHeader";
import Footer from "@/Components/Footer/Footer";

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
};

const index = () => {
  return (
    <div>
      {/* if(accessToken? <GuestHeader /> : <LoginHeader />) */}
      <Footer />
    </div>
  );
};

export default index;
