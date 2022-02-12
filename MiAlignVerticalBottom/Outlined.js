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
    <Path d="M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z" />
  </Svg>
);

export default SvgOutlined;
