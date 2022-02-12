import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgSharp = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M16 7H8v8h2v7h4v-7h2z" />
    <Circle cx={12} cy={4} r={2} />
  </Svg>
);

export default SvgSharp;
