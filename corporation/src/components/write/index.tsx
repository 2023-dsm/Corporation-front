import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    detail_work_area: "",
    job_description: "",
    week_work_time: "",
    month_work_time: "",
    money: 0,
    manager: "",
    close_date: "",
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const onChangeArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const onClickWrite = () => {
    axios
      .post(
        "192.168.1.149:8080/recruitment/write/employment",
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        alert("작성이 완료되었습니다.");
        navigate("/main");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <WriteContainer>
        <h1>채용의뢰서 작성</h1>
        <WriteWrapper>
          <InputContainer>
            <p>근무지역</p>
            <input
              onChange={onChangeInput}
              name="detail_work_area"
              placeholder="근무지역을 입력해주세요"
            />
          </InputContainer>
          <InputAreaContainer>
            <p>직무내용</p>
            <textarea
              onChange={onChangeArea}
              name="job_description"
              placeholder="직무내용을 입력해주세요"
            />
          </InputAreaContainer>
          <TimeContainer>
            <InputContainer>
              <p>주근무시간</p>
              <input
                onChange={onChangeInput}
                name="week_work_time"
                placeholder="주근무시간을 입력해주세요"
              />
            </InputContainer>
            <InputContainer>
              <p>월근무시간</p>
              <input
                onChange={onChangeInput}
                name="month_work_time"
                placeholder="월근무시간을 입력해주세요"
              />
            </InputContainer>
          </TimeContainer>
          <EtcContainer>
            <InputContainer>
              <p>임금액</p>
              <input
                onChange={onChangeInput}
                name="money"
                placeholder="임금액을 입력해주세요"
              />
            </InputContainer>
            <InputContainer>
              <p>구인담당자</p>
              <input
                onChange={onChangeInput}
                name="manager"
                placeholder="구인담당자를 입력해주세요"
              />
            </InputContainer>
            <InputContainer>
              <p>접수 마감 일자</p>
              <input
                onChange={onChangeInput}
                name="close_date"
                placeholder="접수 마감 일자 입력해주세요"
              />
            </InputContainer>
          </EtcContainer>
        </WriteWrapper>
      </WriteContainer>
      <BtnDiv>
        <NextButton onClick={onClickWrite}>의뢰하기</NextButton>
      </BtnDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WriteContainer = styled.div`
  width: 1150px;

  > h1 {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 20px;
  }
`;

const WriteWrapper = styled.div`
  width: 100%;
  padding: 30px;
  border: 1px solid black;
  border-radius: 8px;
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
    width: 300px;
    height: 40px;
    padding-left: 8px;
    border: 1px solid black;
    border-radius: 8px;
  }
`;

const InputAreaContainer = styled.div`
  > p {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 16px;
    color: black;
  }
  > textarea {
    margin-top: 5px;
    outline: none;
    width: 600px;
    height: 90px;
    padding: 8px;
    border: 1px solid black;
    border-radius: 8px;
    resize: none;
  }
`;

const TimeContainer = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-right: 50px;
  }
`;

const EtcContainer = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-right: 50px;
  }
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

export default Write;
