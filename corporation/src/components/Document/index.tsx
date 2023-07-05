import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface GetData {
  name: string;
  age: number;
  address: string;
  phone_number: string;
  introduce: string;
  career: string;
}

const Document = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<GetData>({
    address: "",
    age: 0,
    career: "",
    introduce: "",
    name: "",
    phone_number: "",
  });

  let { id } = useParams();
  const ID = String(id);

  useEffect(() => {
    axios
      .get<GetData>(`http://192.168.1.149:8080/user/get/resume/${ID}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        setData({
          address: res.data.address,
          age: res.data.age,
          career: res.data.career,
          introduce: res.data.introduce,
          name: res.data.name,
          phone_number: res.data.phone_number,
        });
      });
  }, []);

  const onClickPatch = () => {
    axios
      .patch(
        `http://192.168.1.149:8080/employment/deadline/${ID}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then((res) => {
        alert("지원자의 면접을 진행합니다.");
        navigate("/main");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <DocumentContainer>
        <h1>이력서</h1>
        <DocumentWrapper>
          <ApplicateInfoContainer>
            <div className="userInfo">
              <div className="name">
                <h1>{data.name}</h1>
                <p>{data.age}세</p>
              </div>
              <div className="address">{data.address}</div>
            </div>
            <div className="phone">
              <p>82+{data.phone_number}</p>
            </div>
          </ApplicateInfoContainer>
          <ContentContainer>
            <p>소개</p>
            <p>{data.introduce}</p>
          </ContentContainer>
          <CareerContainer>
            <p>경력 사항</p>
            <p>{data.career}</p>
          </CareerContainer>
        </DocumentWrapper>
      </DocumentContainer>
      <BtnDiv>
        <NextButton onClick={onClickPatch}>면접 보기</NextButton>
      </BtnDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DocumentContainer = styled.div`
  width: 1150px;

  > h1 {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 20px;
  }
`;

const DocumentWrapper = styled.div`
  width: 100%;
  padding: 30px;
  border: 1px solid black;
  border-radius: 8px;
`;

const BtnDiv = styled.div`
  width: 1210px;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const NextButton = styled.button`
  cursor: pointer;
  width: 300px;
  height: 50px;
  border: 1px solid #008000;
  border-radius: 18px;
  background-color: #008000;
  font-size: 18px;
  font-weight: 400;
  color: white;
`;

const ApplicateInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  .userInfo {
    display: flex;
    flex-direction: column;

    .name {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      height: 30px;

      > h1 {
        font-size: 36px;
        font-weight: 800;
      }
      > p {
        margin-top: 30px;
        margin-left: 8px;
        font-size: 18px;
      }
    }

    .address {
      font-size: 18px;
    }
  }

  .phone {
    > p {
      font-weight: 800;
      font-size: 18px;
    }
  }
`;

const ContentContainer = styled.div`
  margin-bottom: 30px;
  > p {
    margin: 0px 0px 8px 0px;
    font-weight: 600;
    font-size: 18px;
    color: black;
  }
`;

const CareerContainer = styled.div`
  white-space: pre;
  > p {
    width: 450px;
    margin: 0px 0px 8px 0px;
    font-weight: 600;
    font-size: 18px;
    color: black;
  }
`;

export default Document;
