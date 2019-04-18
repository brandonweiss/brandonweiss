import styled from "@emotion/styled"
import Icon from "./icon.html.jsx"

const Input = styled.input`
  display: none;

  &:checked[id="color-scheme-light"] ~ label[for="color-scheme-light"],
  &:checked[id="color-scheme-dark"] ~ label[for="color-scheme-dark"] {
    display: none;
  }
`

const Label = styled.label`
  cursor: pointer;
  height: 32px;
  width: 32px;
  position: absolute;
  top: 15px;
  right: 15px;
`

export default () => (
  <React.Fragment>
    <Input type="radio" name="color-scheme" id="color-scheme-light" value="light" />
    <Label htmlFor="color-scheme-light">
      <Icon name="sun" />
    </Label>

    <Input type="radio" name="color-scheme" id="color-scheme-dark" value="dark" />
    <Label htmlFor="color-scheme-dark">
      <Icon name="moon" />
    </Label>
  </React.Fragment>
)
