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
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10V9z" />
  </Svg>
);

export default SvgOutlined;
