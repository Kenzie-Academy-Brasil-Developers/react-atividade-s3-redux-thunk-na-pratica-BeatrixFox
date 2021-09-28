import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";
import { useState } from "react";
import { Container } from "./styles";

const InputCommit = () => {
  const dispatch = useDispatch();

  const [newComment, setNewComment] = useState("");

  const handleClick = () => {
    dispatch(addCommentThunk(newComment));
    setNewComment("");
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="Novo Comentário"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleClick}>Send</button>
    </Container>
  );
};

export default InputCommit;
