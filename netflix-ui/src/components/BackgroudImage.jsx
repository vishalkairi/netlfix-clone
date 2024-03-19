import backgroundimage from "../assets/login.jpg";
import styled from "styled-components";
export default function BackgroudImage() {
  return (
    <Container>
      <img src={backgroundimage} alt="backgroundimage" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  image : {
    height: 100vh;
    width: 100vw;
  }
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
