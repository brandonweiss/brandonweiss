import Disco from "./components/disco.html.jsx"
import Header from "./components/header.html.jsx"
import Links from "./components/links.html.jsx"
import Section from "./components/section.html.jsx"
import Spacer from "./components/spacer.html.jsx"
import Tracking from "./components/tracking.html.jsx"
import styled from "@emotion/styled"

const Main = styled.main`
  margin: 0 auto;
  max-width: 1100px;
`

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
      <Header />

      <Main>
        <Section data={data.work.companies} />

        <Spacer height="5rem" />

        <Section id="projects" heading="Projects" data={data.work.projects} />

        <Spacer height="5rem" />

        <Section
          id="open-source"
          heading="Open-source"
          data={[
            ...data.work.open_source,
            {
              id: "more",
              name: "And much more…",
              url: "https://github.com/brandonweiss?tab=repositories&type=source",
            },
          ]}
        />

        <Spacer height="8rem" />

        <Links />
      </Main>

      <Spacer height="4rem" />

      <Disco />

      <Tracking environment={environment} />
    </body>
  </html>
)
