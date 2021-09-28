import styled from "styled-components";

export const Container = styled.div`
  background: lightcoral;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  input {
    width: 70%;
    padding: 5px;
    font-size: 15px;
    color: black;
    height: 50px;
  }
  button {
    width: 100px;
    height: 60px;
    font-size: 20px;
    background: lightgreen;
    color: darkblue;
  }
`;
