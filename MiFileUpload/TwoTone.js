import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTwoTone = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path opacity={0.3} d="M9.83 8H11v6h2V8h1.17L12 5.83z" />
    <Path d="M5 18h14v2H5zM5 10h4v6h6v-6h4l-7-7-7 7zm8-2v6h-2V8H9.83L12 5.83 14.17 8H13z" />
  </Svg>
);

export default SvgTwoTone;
