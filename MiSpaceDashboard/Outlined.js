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
    <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h6v14H5zm14 0h-6v-7h6v7zm0-9h-6V5h6v5z" />
  </Svg>
);

export default SvgOutlined;
