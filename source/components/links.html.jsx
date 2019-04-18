import styled from "@emotion/styled"
import Icon from "./icon.html.jsx"

const Links = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`

const Link = styled.a`
  padding: 0.5em;
  width: 3rem;
  height: 3rem;
  display: block;
  transition: var(--transition);

  &:hover {
    transform: var(--transform-scale);
  }

  svg * {
    stroke: var(--text-color);
    transition: var(--transition);
  }

  &:hover svg * {
    stroke: var(--text-hover-color);
  }
`

export default () => (
  <Links>
    <li>
      <Link href="https://twitter.com/brandon_weiss">
        <Icon name="twitter" />
      </Link>
    </li>

    <li>
      <Link href="https://instagram.com/brandonweiss/">
        <Icon name="instagram" />
      </Link>
    </li>

    <li>
      <Link href="https://github.com/brandonweiss">
        <Icon name="github" />
      </Link>
    </li>

    <li>
      <Link href="mailto:brandon@anti-pattern.com">
        <Icon name="mail" />
      </Link>
    </li>
  </Links>
)
