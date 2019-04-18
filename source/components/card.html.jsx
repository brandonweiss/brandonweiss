import styled from "@emotion/styled"
import Icon from "./icon.html.jsx"
import Ruby from "./languages/ruby.svg"
import Node from "./languages/node.svg"
import GitHub from "./languages/github.svg"
import Spacer from "./spacer.html.jsx"

const Status = styled.div`
  align-items: center;
  display: flex;
  height: 1.5em;
  justify-content: center;
  width: 1.5em;
  position: absolute;
  top: 0.8em;
  right: 0.8em;

  i {
    display: inherit;
  }

  span {
    height: 100%;
    width: 100%;
  }

  svg * {
    stroke: var(--gray-color);
  }
`

const StyledNode = styled(Status)`
  svg path {
    fill: var(--node-color);
  }
`

const StyledRuby = styled(Status)`
  svg path {
    fill: var(--ruby-color);
  }
`

let languageComponent = (language) => {
  switch (language) {
    case "ruby":
      return <StyledRuby>
        <Ruby />
      </StyledRuby>
    case "node":
      return <StyledNode>
        <Node />
      </StyledNode>
  }
}

const Name = styled.h3`
  font-weight: 400;
  font-size: 1.4rem;
`

const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4em;
`

const Link = styled.a`
  transition: var(--transition);

  &:hover {
    color: var(--text-hover-color);
  }

  &:hover .image {
    transform: var(--transform-scale);
  }
`

const Outer = styled.div`
  position: relative;

  &:before {
    display: block;
    content: "";
    padding-top: 75%;
  }
`

const Inner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const Image = styled.div`
  align-items: center;
  background-color: var(--card-background-color);
  border-radius: 0.4em;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: var(--transition);

  img,
  span {
    height: 55%;
    width: 55%;
    object-fit: contain;
  }
`

const Card = ({ datum }) => (
  <div>
    <Outer>
      <Inner>
        <Image className="image">
          {
            datum.image_path ? (
              <img src={datum.image_path} alt={datum.name} />
            ) : (
              <GitHub />
            )
          }

          {
            datum.status &&
              <Status>
                <Icon name="sunset" />
              </Status>
          }

          {
            datum.language &&
              languageComponent(datum.language)
          }
        </Image>
      </Inner>
    </Outer>

    <Spacer height="1rem" />

    <Name>
      {datum.name}
    </Name>

    <Spacer height="0.25rem" />

    <Description>
      {datum.description}
    </Description>
  </div>
)

export default ({ datum, tag }) => {
  let Tag = `${tag}`

  return <Tag>
    {
      datum.url ? (
        <Link href={datum.url}>
          <Card datum={datum} />
        </Link>
      ) : (
        <Card datum={datum} />
      )
    }
  </Tag>
}
