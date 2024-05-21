import Input from "@/Components/Input/Input";

const login = () => {

  return (

    
    <form>
      <Input 
        name={'email'}
        label={'이메일'}
        placeholder={'이메일을 입력해 주세요'}
        type={'email'}
        />
        <Input 
        name={'email'}
        label={'비밀번호'}
        placeholder={'비밀번호를 입력해 주세요'}
        type={'password'}
        />
    </form>
  );
};

export default login;
