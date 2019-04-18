import Icon from "./icon.html.jsx"
import styled from "@emotion/styled"

const Chevrons = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 6%;
  height: 3rem;
  width: 3rem;

  @supports (-webkit-overflow-scrolling: touch) {
    bottom: 18%;
  }

  @keyframes upper-chevron {
    5% {
      transform: translateY(0);
      opacity: 1;
    }
    15% {
      opacity: 0;
    }
    20% {
      transform: translateY(0.4em);
    }
    50% {
      transform: translateY(0);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
  }

  @keyframes lower-chevron {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    10% {
      opacity: 0;
    }
    15% {
      transform: translateY(0.4em);
    }
    50% {
      transform: translateY(0);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
  }

  polyline:last-child {
    animation-name: upper-chevron;
    animation-delay: 3s;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    will-change: transform;
  }

  polyline:first-child {
    animation-name: lower-chevron;
    animation-delay: 3s;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    will-change: transform;
  }
`

export default () => (
  <Chevrons>
    <Icon name="chevrons-down" />
  </Chevrons>
)
