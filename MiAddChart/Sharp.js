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
    <Path d="M11 9h2v8h-2V9zm-2 8v-6H7v6h2zm10 2H5V5h6V3H3v18h18v-8h-2v6zm-4-6v4h2v-4h-2zm4-8V2h-2v3h-3v2h3v3h2V7h3V5h-3z" />
  </Svg>
);

export default SvgSharp;
