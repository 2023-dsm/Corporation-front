import styled from "styled-components";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

interface ILogin {
  access_token: string;
}

const Login = () => {
  const [loginData, setLoginData] = useState({
    user_id: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onClickLogin = () => {
    axios
      .post<ILogin>("http://192.168.0.25:8080/company/login", { ...loginData })
      .then((res) => {
        console.log(res);
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/main");
      });
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <Title>로그인</Title>
        <InputContainer>
          <p>id</p>
          <input
            onChange={onChangeInput}
            name="user_id"
            placeholder="id를 입력해주세요"
          />
        </InputContainer>
        <InputContainer>
          <p>비밀번호</p>
          <input
            onChange={onChangeInput}
            name="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </InputContainer>
        <NextButton onClick={onClickLogin}>로그인</NextButton>
        <SignBtn>
          <p className="a">회원이 아니신가요?</p>
          <Link to="/sign">
            <p className="b">회원가입하기</p>
          </Link>
        </SignBtn>
      </LoginWrapper>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const LoginWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 60px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  box-shadow: 0px 2px 8px rgba(33, 33, 33, 0.25);
  background-color: white;
`;

const Title = styled.h1`
  font-size: 32px;
`;

const InputContainer = styled.div`
  > p {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 16px;
    color: black;
  }
  > input {
    margin-top: 5px;
    outline: none;
    width: 450px;
    height: 40px;
    padding-left: 8px;
    border: none;
    border-bottom: 1px solid #008000;
  }
`;

const NextButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 50px;
  margin-top: 50px;
  border: 1px solid #008000;
  border-radius: 18px;
  background-color: #008000;
  font-size: 18px;
  font-weight: 400;
  color: white;
`;

const SignBtn = styled.div`
  display: flex;

  .a {
    color: black;
  }

  .b {
    cursor: pointer;
    margin-left: 5px;
    text-decoration: underline;
    color: #008000;
  }
`;

export default Login;
