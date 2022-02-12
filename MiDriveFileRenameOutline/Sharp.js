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
    <Path d="m15 16-4 4h10v-4zM12.06 7.19 3 16.25V20h3.75l9.06-9.06zM13.132 6.123l2.539-2.539 3.747 3.748L16.88 9.87z" />
  </Svg>
);

export default SvgSharp;
