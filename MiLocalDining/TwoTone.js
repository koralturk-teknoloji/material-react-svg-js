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
    <Path d="M5.11 21.28 12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41zM3.91 9.16l4.19 4.18 2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66z" />
  </Svg>
);

export default SvgTwoTone;
