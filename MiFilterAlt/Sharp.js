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
    <Path d="M0 0h24m0 24H0" fill="none" />
    <Path d="M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9H3z" />
    <Path d="M0 0h24v24H0V0z" fill="none" />
  </Svg>
);

export default SvgSharp;
