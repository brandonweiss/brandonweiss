import Tracking from "./components/tracking.html.jsx"

export default ({ environment } = props) => (

  <html>
  <head>
    <meta charSet="utf-8" />

    <title>Brandon Weiss, Product Engineer</title>

    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </head>

  <body>
    <p>File not found.</p>

    <Tracking environment={environment} />
  </body>
  </html>

)
