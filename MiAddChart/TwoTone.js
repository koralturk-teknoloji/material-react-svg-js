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
    <Path d="M22 5v2h-3v3h-2V7h-3V5h3V2h2v3h3zm-3 14H5V5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2v6zm-4-6v4h2v-4h-2zm-4 4h2V9h-2v8zm-2 0v-6H7v6h2z" />
  </Svg>
);

export default SvgTwoTone;
