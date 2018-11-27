import classNames from "@sindresorhus/class-names"
import Icon from "./icon.html.jsx"
import Ruby from "./languages/ruby.html.jsx"
import Node from "./languages/node.html.jsx"
import GitHub from "./languages/github.html.jsx"
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
          <div className={classNames("card", datum.id)}>
            {
              datum.image_path ? (
                <img src={datum.image_path} alt={datum.name} />
              ) : (
                <GitHub />
              )
            }

            {
              datum.status &&
                <div className="status">
                  <Icon name="sunset" />
                </div>
            }

            {
              datum.language &&
                <div className={classNames("status", datum.language)}>
                  { languageComponent(datum.language) }
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
