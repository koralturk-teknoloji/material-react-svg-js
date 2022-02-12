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
    <Circle cx={19} cy={3} r={3} />
    <Path d="M6 8V6h9.03a4.906 4.906 0 0 1-.92-4H2.01L2 22l4-4h16V6.97C21.16 7.61 20.13 8 19 8H6zm8 6H6v-2h8v2zm4-3H6V9h12v2z" />
  </Svg>
);

export default SvgSharp;
