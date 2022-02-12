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
    <Path d="M2.21 10.47 5 9.36 7.25 15H8V2h2.5v10h1V0H14v12h1V1.5h2.5V12h1V4.5H21V16c0 4.42-3.58 8-8 8-3.26 0-6.19-1.99-7.4-5.02l-3.39-8.51z" />
  </Svg>
);

export default SvgSharp;
