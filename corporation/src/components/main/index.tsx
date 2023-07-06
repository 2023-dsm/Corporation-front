import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Block from "./Block";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface Applicate {
  id: number;
  name: string;
  sex: string;
  age: number;
}

interface CompanyGet {
  application_list: Applicate[];
}

const Main = () => {
  const [data, setData] = useState<Applicate[]>([]);
  const navigate = useNavigate();

  const onClickWrite = () => {
    navigate("/write");
  };

  useEffect(() => {
    axios
      .get<CompanyGet>(`http://192.168.0.25:8080/employment/company`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        setData(res.data.application_list);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <TitleContainer>
        <TitleWrapper>
          <h1>지원자 리스트</h1>
          <p>지원자 클릭 시 상세 이력서를 확인 할 수 있습니다.</p>
        </TitleWrapper>
        <WriteButton onClick={onClickWrite}>채용의뢰서 작성하기</WriteButton>
      </TitleContainer>
      <ApplicantList>
        {Array.isArray(data) &&
          data.map((item, idx) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/document/${item.id}`}
            >
              <Block
                key={idx}
                age={item.age}
                id={item.id}
                name={item.name}
                sex={item.sex}
              />
            </Link>
          ))}
      </ApplicantList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 1150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    margin: 0;
    font-size: 24px;
    font-weight: 800;
  }

  > p {
    margin: 5px 0px 0px 0px;
    font-size: 14px;
  }
`;

const WriteButton = styled.button`
  cursor: pointer;
  width: 200px;
  height: 40px;
  outline: none;
  border: 1px solid #ade581;
  border-radius: 8px;
  background-color: #ade581;
  font-size: 16px;
  font-weight: 600;
`;

const ApplicantList = styled.div`
  margin-top: 30px;
  width: 1150px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export default Main;
