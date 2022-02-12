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
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="M5 5h7V3H3v18h9v-2H5z" />
    <Path d="m21 12-4-4v3H9v2h8v3z" />
  </Svg>
);

export default SvgSharp;
