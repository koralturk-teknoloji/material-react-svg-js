import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFilled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M21 8H3V4h18v4zm0 2H3v4h18v-4zm0 6H3v4h18v-4z" />
  </Svg>
);

export default SvgFilled;
