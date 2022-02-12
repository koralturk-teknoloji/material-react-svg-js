import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgOutlined = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Circle cx={12} cy={12} r={5} />
  </Svg>
);

export default SvgOutlined;
