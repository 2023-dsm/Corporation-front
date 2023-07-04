import styled from "styled-components";

const Document = () => {
  return (
    <Wrapper>
      <DocumentContainer>
        <h1>이력서</h1>
        <DocumentWrapper>
          <ApplicateInfoContainer>
            <div className="userInfo">
              <div className="name">
                <h1>김승진</h1>
                <p>65세</p>
              </div>
              <div className="address">강원도 정선군 남면 무릉1로 109</div>
            </div>
            <div className="phone">
              <p>82+01012345678</p>
            </div>
          </ApplicateInfoContainer>
          <ContentContainer>
            <p>소개</p>
            <p>
              삼성전자에서 30년간 근무한 65세 김승진입니다. 잘 부탁드립니다.
            </p>
          </ContentContainer>
          <CareerContainer>
            <p>경력 사항</p>
            <p>
              90.04.10 ~ 20.05.10 - 삼성전자 \n 90.04.10 ~ 20.05.10 - 90.04.10 ~
              20.05.10 - 삼성전자 \n 90.04.10 ~ 20.05.10 -
            </p>
          </CareerContainer>
        </DocumentWrapper>
      </DocumentContainer>
      <BtnDiv>
        <NextButton>면접 보기</NextButton>
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
