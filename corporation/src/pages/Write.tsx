import styled from "styled-components";
import Write from "../components/write";
import Headers from "../components/header";

const WritePage = () => {
  return (
    <Wrapper>
      <Headers />
      <Write />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default WritePage;
