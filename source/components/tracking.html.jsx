export default ({ environment } = props) => {
  let isProduction = (environment === "production")

  let scriptBody = `
    var _gauges = _gauges || [];
    (function() {
      var t   = document.createElement('script');
      t.type  = 'text/javascript';
      t.async = true;
      t.id    = 'gauges-tracker';
      t.setAttribute('data-site-id', '4d63cbd0a219863d81000002');
      t.src = '//secure.gaug.es/track.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(t, s);
    })();
  `

  let script = {
    __html: scriptBody
  }

  if (isProduction) {
    return (
      <script type="text/javascript" dangerouslySetInnerHTML={script} />
    )
  } else {
    return (null)
  }
}
