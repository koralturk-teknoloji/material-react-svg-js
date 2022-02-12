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
    <Path d="M19 1H5v22h14V1zm-5 20h-4v-1h4v1zm3-3H7V4h10v14z" />
  </Svg>
);

export default SvgSharp;
