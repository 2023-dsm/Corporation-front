import styled from "styled-components";

interface Applicate {
  id: number;
  name: string;
  sex: string;
  age: number;
}

const Block = ({ ...props }: Applicate) => {
  return (
    <Wrapper>
      <NameWrapper>
        <p>{props.sex}</p>
        <p className="line">|</p>
        <p>{props.name}</p>
      </NameWrapper>
      <p>{props.age}세</p>
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
