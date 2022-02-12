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
    <Path d="M20 8h-5v2h3v11H6V10h3V8H4v15h16z" />
    <Path d="M11 16h2V5h3l-4-4-4 4h3z" />
  </Svg>
);

export default SvgSharp;
