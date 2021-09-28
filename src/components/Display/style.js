import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  background: lightcyan;
`;

export const SectionTitle = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  img {
    width: 80px;
    height: 80px;
    border-radius: 20px;
  }
  p {
    font-size: 25px;
    margin: 10px;
    color: darkgoldenrod;
  }
`;
