import styled from "styled-components";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate("/main");
  };

  return (
    <Wrapper>
      <LogoWrapper onClick={onClickLogo}>
        <img width={60} src={logo} alt="" />
        <p>고수들의 직장</p>
      </LogoWrapper>
      <ComponyTitle>기업 이름</ComponyTitle>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 20px;
  margin-bottom: 50px;
  background: #fcfcfc;
  border-bottom: 1px solid #008000;
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  > img {
    margin-left: 50px;
  }

  > p {
    margin-left: 14px;
    font-size: 24px;
    font-weight: 800;
  }
`;

const ComponyTitle = styled.h1`
  margin-right: 50px;
  font-size: 24px;
  font-weight: 800;
`;

export default Headers;
