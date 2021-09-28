import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
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

export const SectionCommits = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: flex-end;
`;

export const ItemCommit = styled.li`
  list-style: none;
  font-size: 18px;
  display: flex;
  flex-direction: row-reverse;
  background: lightgreen;
  border-radius: 5px;
  margin-top: 5px;
  img {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    margin: 5px;
  }
  p {
    margin: 5px;
    text-align: right;
  }
`;
