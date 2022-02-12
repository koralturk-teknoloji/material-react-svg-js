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
    <Path d="M6 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM5 6c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm12 8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zM8 18c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm3 4c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm3 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z" />
  </Svg>
);

export default SvgFilled;
