import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
  const [signData, setSignData] = useState({
    compony_name: "",
    user_id: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setSignData({ ...signData, [name]: value });
    console.log(signData);
  };

  const onClickSign = () => {
    console.log("1", signData);
    axios
      .post("http://192.168.1.149:8080/company/signup", { ...signData })
      .then(() => {
        alert("회원가입에 성공하셨습니다.");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <SignContainer>
      <SignWrapper>
        <Title>회원가입</Title>
        <InputContainer>
          <p>기업명</p>
          <input
            onChange={onChangeInput}
            name="compony_name"
            placeholder="기업명 입력해주세요"
          />
        </InputContainer>
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
        <NextButton type="button" onClick={onClickSign}>
          회원가입
        </NextButton>
      </SignWrapper>
    </SignContainer>
  );
};

const SignContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const SignWrapper = styled.div`
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
  margin-top: 80px;
  border: 1px solid #008000;
  border-radius: 18px;
  background-color: #008000;
  font-size: 18px;
  font-weight: 400;
  color: white;
`;

export default SignUp;
