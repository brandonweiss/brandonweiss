import Icon from "./icon.html.jsx"

export default () => (
  <React.Fragment>
    <input type="radio" name="color-scheme" className="color-scheme-control" id="color-scheme-light" value="light" />
    <label htmlFor="color-scheme-light" className="color-scheme-label">
      <Icon name="sun" />
    </label>

    <input type="radio" name="color-scheme" className="color-scheme-control" id="color-scheme-dark" value="dark" />
    <label htmlFor="color-scheme-dark" className="color-scheme-label">
      <Icon name="moon" />
    </label>
  </React.Fragment>
)
