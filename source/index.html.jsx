import Icon from "./components/icon.html.jsx"
import Card from "./components/card.html.jsx"
import Spacer from "./components/spacer.html.jsx"
import Tracking from "./components/tracking.html.jsx"

export default ({ data, environment } = props) => (

  <html>
  <head>
    <meta charSet="utf-8" />

    <title>Brandon Weiss, Product Engineer</title>

    <script src="/javascripts/index.js"></script>
    <link href="/stylesheets/index.css" rel="stylesheet" media="all" />

    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </head>

  <body>
    <header>
      <h1>
        Hi, I’m Brandon, a product engineer in San Francisco.
      </h1>

      <div className="chevrons">
        <Icon name="chevrons-down" />
      </div>
    </header>

    <main>
      <ol className="works list-reset">
        {
          data.work.companies.map((company) => {
            return <li key={company.id}>
              {
                company.url ? (
                  <a href={company.url} className="work-link">
                    <Card datum={company} />
                  </a>
                ) : (
                  <Card datum={company} />
                )
              }
            </li>
          })
        }
      </ol>

      <Spacer height="5rem" />

      <h2 className="work-type">Projects</h2>

      <Spacer height="2rem" />

      <ol className="works list-reset">
        {
          data.work.projects.map((project) => {
            return <li key={project.id}>
              <a href={project.url} className="work-link">
                <Card datum={project} />
              </a>
            </li>
          })
        }
      </ol>

      <Spacer height="5rem" />

      <h2 className="work-type">Open-source</h2>

      <Spacer height="2rem" />

      <ol className="works list-reset">
        {
          data.work.open_source.map((openSource) => {
            return <li key={openSource.id}>
              <a href={openSource.url} className="work-link">
                <Card datum={openSource} />
              </a>
            </li>
          })
        }
      </ol>

      <Spacer height="8rem" />

      <ul className="list-reset links">
        <li>
          <a href="https://twitter.com/brandon_weiss" className="link">
            <Icon name="twitter" />
          </a>
        </li>

        <li>
          <a href="https://instagram.com/brandonweiss/" className="link">
            <Icon name="instagram" />
          </a>
        </li>

        <li>
          <a href="https://github.com/brandonweiss" className="link">
            <Icon name="github" />
          </a>
        </li>

        <li>
          <a href="mailto:brandon@anti-pattern.com" className="link">
            <Icon name="mail" />
          </a>
        </li>
      </ul>
    </main>

    <Spacer height="4rem" />

    <Tracking environment={environment} />
  </body>
  </html>

)
