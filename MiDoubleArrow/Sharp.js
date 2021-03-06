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
    <Path d="M15.5 5H11l5 7-5 7h4.5l5-7z" />
    <Path d="M8.5 5H4l5 7-5 7h4.5l5-7z" />
  </Svg>
);

export default SvgSharp;
