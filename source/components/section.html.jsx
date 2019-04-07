import Card from "./card.html.jsx"
import Spacer from "./spacer.html.jsx"

export default ({ data, heading }) => (
  <React.Fragment>
    {
      heading && (
        <React.Fragment>
          <h2 className="work-type">
            {heading}
          </h2>

          <Spacer height="2rem" />
        </React.Fragment>
      )
    }

    <ol className="works list-reset">
      {
        data.map((datum) => <Card tag="li" datum={datum} key={datum.id} />)
      }
    </ol>
  </React.Fragment>
)
