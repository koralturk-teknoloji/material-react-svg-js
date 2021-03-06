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
    <Path d="M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z" />
  </Svg>
);

export default SvgOutlined;
