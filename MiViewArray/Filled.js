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
    <Path d="M21 5h-3v14h3V5zm-4 0H7v14h10V5zM6 5H3v14h3V5z" />
  </Svg>
);

export default SvgFilled;
