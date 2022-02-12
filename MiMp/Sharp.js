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
    <Path d="M21 3H3v18h18V3zM6 9h6.5v6H11v-4.5h-1v3H8.5v-3h-1V15H6V9zm9 6h-1.5V9H18v4.5h-3V15zm0-3h1.5v-1.5H15V12z" />
  </Svg>
);

export default SvgSharp;
