import { Container } from "./style";
import InputCommit from "./components/InputCommit/InputCommit";
import Display from "./components/Display/Display";

function App() {
  return (
    <Container>
      <h1>Chat de Teste</h1>
      <Display />
      <InputCommit />
    </Container>
  );
}

export default App;
