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
    <Path
      d="M6 8.83V20h12V4h-7.17L6 8.83zM11 8h2v5h-2V8zm0 7h2v2h-2v-2z"
      opacity={0.3}
    />
    <Path d="M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V8.83L10.83 4H18v16z" />
    <Path d="M11 15h2v2h-2zM11 8h2v5h-2z" />
  </Svg>
);

export default SvgTwoTone;
