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
    <Path d="M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM1 9h6l7-5 1.31 1.52-4.17 2.98H14L21.8 4 23 5.4 14.5 12 14 22h-2l-.5-10L8 11H1V9z" />
  </Svg>
);

export default SvgSharp;
