import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgOutlined = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="M20 4v12h-1.34l1.91 1.91A2.01 2.01 0 0 0 22 16V4c0-1.1-.9-2-2-2H4.66l2 2H20zM6 12h2v2H6zm12-3h-6.34l2 2H18zm0-3h-8v1.34l.66.66H18zM1.41 1.59 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73 1.41-1.41L1.41 1.59zM5.17 16 4 17.17V7l2 2v2h2l5 5H5.17z" />
  </Svg>
);

export default SvgOutlined;