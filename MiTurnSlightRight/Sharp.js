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
    <Path d="M12.34 6V4H18v5.66h-2V7.41l-5 5V20H9v-8.41L14.59 6z" />
  </Svg>
);

export default SvgSharp;
