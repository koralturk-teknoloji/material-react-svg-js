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
    <Path d="M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-8.41L9.41 6z" />
  </Svg>
);

export default SvgSharp;
