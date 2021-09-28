import { useSelector } from "react-redux";
import fotoUser from "./../../assets/naruto.gif";
import { Container, ItemCommit, SectionCommits, SectionTitle } from "./style";

const Display = () => {
  const comments = useSelector((store) => store.user);

  return (
    <Container>
      <SectionTitle>
        <img src={fotoUser} alt={comments.name}></img>
        <p>{comments.name}</p>
      </SectionTitle>
      <SectionCommits>
        {comments.comments.map((comment, index) => (
          <ItemCommit key={index}>
            <img src={fotoUser} alt={comments.name}></img>
            <p>{comment}</p>
          </ItemCommit>
        ))}
      </SectionCommits>
    </Container>
  );
};

export default Display;
