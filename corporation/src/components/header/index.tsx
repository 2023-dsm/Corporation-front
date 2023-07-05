import styled from "styled-components";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

interface GetData {
  company_name: string;
}

const Headers = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate("/main");
  };

  useEffect(() => {
    axios
      .get<GetData>(`http://192.168.1.149:8080/company/info`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        setData(res.data.company_name);
      });
  }, []);

  return (
    <Wrapper>
      <LogoWrapper onClick={onClickLogo}>
        <img width={60} src={logo} alt="" />
        <p>고수들의 직장</p>
      </LogoWrapper>
      <ComponyTitle>{data}</ComponyTitle>
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
  margin-bottom: 20px;
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
