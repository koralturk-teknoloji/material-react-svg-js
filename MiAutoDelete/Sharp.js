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
    <Path d="M15 2h-3.5l-1-1h-5l-1 1H1v2h14zM16 9c-.7 0-1.37.1-2 .29V5H2v14h7.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
    <Path d="M16.5 12H15v5l3.6 2.1.8-1.2-2.9-1.7z" />
  </Svg>
);

export default SvgSharp;
