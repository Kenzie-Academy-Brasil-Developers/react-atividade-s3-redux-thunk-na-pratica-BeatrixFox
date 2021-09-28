import styled from "styled-components";

export const Container = styled.div`
  background: lightcyan;
  width: 90%;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px 0 0;
  h1 {
    color: darkblue;
    font-weight: bold;
    font-size: 2rem;
    margin: 20px auto;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
`;
