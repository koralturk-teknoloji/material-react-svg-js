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
    <Path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
  </Svg>
);

export default SvgSharp;
