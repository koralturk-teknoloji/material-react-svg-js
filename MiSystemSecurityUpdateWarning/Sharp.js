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
    <Path d="M11 15h2v2h-2zM11 7h2v6h-2z" />
    <Path d="M5.01 1v22H19V1H5.01zM17 18H7V6h10v12z" />
  </Svg>
);

export default SvgSharp;
