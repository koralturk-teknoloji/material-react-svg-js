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
    <Path d="M4 3H2v14h11v-2H4zm18.24 12.96-2.53 1.15-3.41-6.98A2.019 2.019 0 0 0 14.51 9H11V3H5v11h10l3.41 7 5.07-2.32-1.24-2.72z" />
  </Svg>
);

export default SvgSharp;
