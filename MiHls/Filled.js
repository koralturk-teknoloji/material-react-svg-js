import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFilled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M6.5 9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2V9zm10 6h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H17v-1h2v.5h1.5v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1H19v1h-2V13h-1.5v1c0 .55.45 1 1 1zM14 15v-1.5h-2.5V9H10v6h4z" />
  </Svg>
);

export default SvgFilled;
