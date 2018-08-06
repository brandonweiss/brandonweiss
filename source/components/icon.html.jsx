import feather from "feather-icons"

export default ({ name } = props) => {

  let svg = {
    __html: feather.icons[name].toSvg(),
  }

  return <i dangerouslySetInnerHTML={svg}></i>

}
