import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSharp = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M6.5 9H3v6h1.5v-2h1.1l.9 2H8l-.9-2.1c.5-.3.9-.8.9-1.4v-1C8 9.7 7.3 9 6.5 9zm0 2.5h-2v-1h2v1zM10.25 9l-1.5 6h1.5l.38-1.5h1.75l.37 1.5h1.5l-1.5-6h-2.5zm.75 3 .25-1h.5l.25 1h-1zM19.98 9l-.74 3-.74-3h-1.52l-.74 3-.74-3H14l1.5 6h1.48l.76-3.04.76 3.04h1.48l1.5-6z" />
  </Svg>
);

export default SvgSharp;
