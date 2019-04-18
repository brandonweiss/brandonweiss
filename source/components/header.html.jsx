import styled from "@emotion/styled"
import Chevrons from "./chevrons.html.jsx"

const Header = styled.header`
  height: 100vh;
  margin: 0 auto;
  max-width: 900px;
  position: relative;

  @media (min-height: 1000px) {
    height: 1000px;
  }
`

const Heading = styled.h1`
  top: 30%;
  position: relative;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;

  @supports (-webkit-overflow-scrolling: touch) {
    top: 18%;
  }

  @media (min-width: 540px) {
    font-size: 2.5rem
  }

  @media (min-width: 1100px) {
    font-size: 3rem
  }
`

export default () => (
  <Header>
    <Heading>
      Hi, I’m Brandon, a product engineer in San Francisco.
    </Heading>

    <Chevrons />
  </Header>
)
