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
    <Path d="M18 10V5H6v5H4v7h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20v-7h-2zm-7 0H8V7h3v3zm5 0h-3V7h3v3z" />
  </Svg>
);

export default SvgSharp;
