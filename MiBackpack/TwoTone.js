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
      d="M18 20H6V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v12zM7.5 12v2h7v2h2v-4h-9z"
      opacity={0.3}
    />
    <Path d="M17 4.14V2h-3v2h-4V2H7v2.14c-1.72.45-3 2-3 3.86v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.86-1.28-3.41-3-3.86zM18 20H6V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v12zM7.5 12v2h7v2h2v-4h-9z" />
  </Svg>
);

export default SvgTwoTone;
