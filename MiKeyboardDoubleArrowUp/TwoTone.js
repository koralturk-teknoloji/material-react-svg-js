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
    <Path d="M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z" />
    <Path d="m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z" />
  </Svg>
);

export default SvgTwoTone;
