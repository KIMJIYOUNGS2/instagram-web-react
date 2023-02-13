import { darkModeVar } from "apollo";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Container = styled.section`
  background-color: ${(props) => props.theme.bgColor};
`;

function Login() {
  return (
    <Container>
      <Title>인스타그램</Title>
      <div>
        <form>
          <input type="email" />
          <input type="password" />
          {/* <input type="sumbit">제출</input> */}
        </form>

        <button onClick={() => darkModeVar(true)}>Dark Mode</button>
        <button onClick={() => darkModeVar(false)}>Light Mode</button>
      </div>
    </Container>
  );
}

export default Login;
