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
    <Path d="M15 14h1.5v1.5H15z" />
    <Path d="M3 3v18h18V3H3zm4.5 5h3V7h-3V5.5H12V9H9v1h3v1.5H7.5V8zm5 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zm.5-13h3v6h-1.5V7H13V5.5zM18 17h-3v1.5h-1.5v-6H18V17z" />
  </Svg>
);

export default SvgSharp;
