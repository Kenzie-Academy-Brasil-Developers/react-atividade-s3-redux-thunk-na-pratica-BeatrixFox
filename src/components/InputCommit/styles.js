import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 20px 0 0;
  @media (min-width: 768px) {
    width: 123%;
  }

  input {
    width: 70%;
    padding: 5px;
    font-size: 15px;
    color: black;
    height: 50px;
  }
  button {
    width: 100px;
    height: 50px;
    font-size: 20px;
    background: lightgreen;
    color: darkblue;
  }
`;
