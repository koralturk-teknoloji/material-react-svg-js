import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTwoTone = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z" />
    <Path d="m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z" />
  </Svg>
);

export default SvgTwoTone;
