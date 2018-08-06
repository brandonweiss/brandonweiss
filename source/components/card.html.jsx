import Icon from "./icon.html.jsx"
import Ruby from "./languages/ruby.html.jsx"
import Node from "./languages/node.html.jsx"
import JavaScript from "./languages/javascript.html.jsx"
import Spacer from "./spacer.html.jsx"

let languageComponent = (language) => {
  switch (language) {
    case "ruby":
      return <Ruby />
    case "node":
      return <Node />
    case "javascript":
      return <JavaScript />
  }
}

export default ({ datum } = props) => {

  return (
    <div className="work">
      <div className="card-box-outer">
        <div className="card-box-inner">
          <div className={["card", datum.id, datum.language].filter((item) => !!item).join(" ")}>
            {
              datum.language ? (
                languageComponent(datum.language)
              ) : (
                <img src={datum.image_path} alt={datum.name} />
              )
            }

            {
              datum.status &&
                <div className="status">
                  <Icon name="sunset" />
                </div>
            }
          </div>
        </div>
      </div>

      <Spacer height="1rem" />

      <h3 className="card-name">
        {datum.name}
      </h3>

      <Spacer height="0.25rem" />

      <p className="card-description">
        {datum.description}
      </p>
    </div>
  )

}
