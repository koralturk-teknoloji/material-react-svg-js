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
    <Path d="M4.07 13H2.05c.2 2.01 1 3.84 2.21 5.33l1.43-1.43A7.941 7.941 0 0 1 4.07 13zM5.69 7.1 4.26 5.67A10.013 10.013 0 0 0 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM11 4.07V2.05c-2.01.2-3.84 1-5.33 2.21L7.1 5.69A7.941 7.941 0 0 1 11 4.07zM18.33 4.26A10.013 10.013 0 0 0 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.43-1.43zM18.31 16.9l1.43 1.43A9.98 9.98 0 0 0 21.95 13h-2.02a7.941 7.941 0 0 1-1.62 3.9zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.33L18.31 7.1a7.941 7.941 0 0 1 1.62 3.9zM13 19.93v2.02c2.01-.2 3.84-1 5.33-2.21l-1.43-1.43a7.941 7.941 0 0 1-3.9 1.62zM5.67 19.74A9.98 9.98 0 0 0 11 21.95v-2.02a7.941 7.941 0 0 1-3.9-1.62l-1.43 1.43z" />
    <Circle cx={12} cy={12} r={5} />
  </Svg>
);

export default SvgSharp;
