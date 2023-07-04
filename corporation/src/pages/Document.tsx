import { styled } from "styled-components";
import Document from "../components/Document";
import Headers from "../components/header";

const DocumentPage = () => {
  return (
    <Wrapper>
      <Headers />
      <Document />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default DocumentPage;
