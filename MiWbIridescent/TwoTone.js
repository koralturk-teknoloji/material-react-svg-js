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
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="M7 11h10v2H7z" opacity={0.3} />
    <Path d="M5 15h14V9H5v6zm2-4h10v2H7v-2zm4-10h2v3h-2zm6.25 4.39 1.41 1.41 1.8-1.79-1.42-1.41zM11 20h2v3h-2zm6.24-1.29 1.79 1.8 1.42-1.42-1.8-1.79zM5.34 6.805l-1.788-1.79L4.96 3.61l1.788 1.788zM3.55 19.08l1.41 1.42 1.79-1.8-1.41-1.41z" />
  </Svg>
);

export default SvgTwoTone;
