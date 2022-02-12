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
    <Path d="M6 22h16V5.97L6 22zm14-2h-2v-7.22l2-2V20zM5.22 7.22 3.93 5.93c3.9-3.91 10.24-3.91 14.15 0l-1.29 1.29c-3.19-3.19-8.38-3.19-11.57 0zm7.71 3.85L11 13l-1.93-1.93a2.74 2.74 0 0 1 3.86 0zm1.29-1.28c-1.78-1.77-4.66-1.77-6.43 0L6.5 8.5a6.374 6.374 0 0 1 9 0l-1.28 1.29z" />
  </Svg>
);

export default SvgSharp;
