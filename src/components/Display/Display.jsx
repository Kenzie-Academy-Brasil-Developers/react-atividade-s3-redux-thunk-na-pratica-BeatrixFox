import { useSelector } from "react-redux";
import fotoUser from "./../../assets/naruto.gif";
import { Container, SectionTitle } from "./style";

const Display = () => {
  const comments = useSelector((store) => store.user);

  return (
    <Container>
      <SectionTitle>
        <img src={fotoUser} alt={comments.name}></img>
        <p>{comments.name}</p>
      </SectionTitle>
      <ul>
        {comments.comments.map((comment, index) => (
          <li key={index}>
            <img src={fotoUser} alt={comments.name}></img>
            <p>{comment}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Display;
