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
    <Path d="M20 3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 14H4V5h16v12z" />
    <Path d="M6 8.25h8v1.5H6zM16.5 9.75H18v-1.5h-1.5V7H15v4h1.5zM10 12.25h8v1.5h-8zM7.5 15H9v-4H7.5v1.25H6v1.5h1.5z" />
  </Svg>
);

export default SvgFilled;
