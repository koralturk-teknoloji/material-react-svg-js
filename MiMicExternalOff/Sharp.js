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
    <Path d="M10 5c0-1.66-1.34-3-3-3-.62 0-1.19.19-1.67.5l4.15 4.15C9.8 6.18 10 5.61 10 5zM14 4h4v11.17l2 2V2h-8v7.17l2 2zM2.1 2.1.69 3.51 5.17 8H4l1 10h1v4h8v-5.17l6.49 6.49 1.41-1.41L2.1 2.1zM12 20H8v-2h1l.56-5.61L12 14.83V20z" />
  </Svg>
);

export default SvgSharp;
