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
    <Path d="M17 18H7V6h10v1h2V1H5v22h14v-6h-2zM20.38 9.62 21 11l.62-1.38L23 9l-1.38-.62L21 7l-.62 1.38L19 9z" />
    <Path d="m16 8-1.25 2.75L12 12l2.75 1.25L16 16l1.25-2.75L20 12l-2.75-1.25zM21 13l-.62 1.38L19 15l1.38.62L21 17l.62-1.38L23 15l-1.38-.62z" />
  </Svg>
);

export default SvgSharp;
