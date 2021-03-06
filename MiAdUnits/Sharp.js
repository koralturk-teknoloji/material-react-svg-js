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
    <Path d="M19 1H5v22h14V1zm-2 18H7V5h10v14z" />
    <Path d="M8 6h8v2H8z" />
  </Svg>
);

export default SvgSharp;
