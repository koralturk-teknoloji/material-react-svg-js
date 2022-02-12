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
    <Path d="M11 21H3V3h8v18zm2 0h8v-9h-8v9zm8-11V3h-8v7h8z" />
  </Svg>
);

export default SvgSharp;
