import styled from "styled-components";

const Block = () => {
  return (
    <Wrapper>
      <NameWrapper>
        <p>남성</p>
        <p className="line">|</p>
        <p>김승진</p>
      </NameWrapper>
      <p>65세</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 325px;
  height: 28px;
  padding: 14px;
  border: 1px solid#008000;
  border-radius: 8px;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;

  > p {
    font-size: 16px;
  }

  .line {
    margin-right: 5px;
    margin-left: 5px;
  }
`;

export default Block;
