import styled from "styled-components";
import { Bs } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import video from "../assets/video.mp4";
import { useNavigate } from "react-router-dom";
export default function Player() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="player">
        <div className="left">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={video} autoPlay loop controls muted></video>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  .player {
    width: 100vw;
    height: 100vh;
    .left {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
