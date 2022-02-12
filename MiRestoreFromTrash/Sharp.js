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
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="M6 21h12V7H6v14zm6-11 4 4h-2v4h-4v-4H8l4-4zm3.5-6-1-1h-5l-1 1H5v2h14V4z" />
  </Svg>
);

export default SvgSharp;
