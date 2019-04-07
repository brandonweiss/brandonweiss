import Icon from "./components/icon.html.jsx"
import ColorScheme from "./components/color-scheme.html.jsx"
import Section from "./components/section.html.jsx"
import Spacer from "./components/spacer.html.jsx"
import Tracking from "./components/tracking.html.jsx"

export default ({ data, environment }) => (

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
      <Section data={data.work.companies} />

      <Spacer height="5rem" />

      <Section heading="Projects" data={data.work.projects} />

      <Spacer height="5rem" />

      <Section
        heading="Open-source"
        data={[
          ...data.work.open_source,
          { id: "more", name: "And much more…", url: "https://github.com/brandonweiss?tab=repositories&type=source" },
        ]}
      />

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

    <ColorScheme />

    <Tracking environment={environment} />
  </body>
  </html>

)
