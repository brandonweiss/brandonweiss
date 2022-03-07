import Icon from "../images/disco-ball.svg"
import styled from "@emotion/styled"

const DiscoBall = styled.div`
  cursor: pointer;
  height: 32px;
  width: 32px;
  position: absolute;
  bottom: 15px;
  right: 15px;
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  cursor: pointer;

  height: 0;
  opacity: 0;

  // Fade out
  transition: opacity 0.4s ease, height 0s ease 0.4s;

  &.active {
    height: 100vh;
    opacity: 1;

    // Fade in
    transition: opacity 0.4s ease;
  }
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default () => (
  <React.Fragment>
    <DiscoBall id="disco-ball">
      <Icon />
    </DiscoBall>

    <Wrapper id="disco">
      <audio loop id="audio">
        <source src="/disco/audio.ogg" type="audio/ogg" />
        <source src="/disco/audio.mp3" type="audio/mp3" />
      </audio>

      <Video autoPlay loop muted playsInline id="video">
        <source src="/disco/video.webm" type="video/webm" />
        <source src="/disco/video.mp4" type="video/mp4" />
      </Video>
    </Wrapper>
  </React.Fragment>
)
