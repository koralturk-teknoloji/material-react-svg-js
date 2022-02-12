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
    <Path d="M21 16.61V6.5l-4 4V6h-6.61zM3.41 1.86 2 3.27 4.73 6H3v12h13.73l3 3 1.41-1.41z" />
  </Svg>
);

export default SvgSharp;
