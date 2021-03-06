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
    <Path d="M15.5 12v2.5h-7V12h-2v4.5h11V12z" />
    <Path d="M10 10v3h4v-3l2.25-.01V7.5h-8.5v2.49z" />
    <Path d="M22 2H2v20h20V2zm-3 7.99V18H5v-8l1.25-.01V6h11.5v3.99H19z" />
  </Svg>
);

export default SvgSharp;
