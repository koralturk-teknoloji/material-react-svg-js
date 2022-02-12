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
    <Path d="M11 8H6V6h5V4H8.5V3h-2v1H4v6h5v2H4v2h2.5v1h2v-1H11zM19.59 12.52l-5.66 5.65-2.83-2.83-1.41 1.42L13.93 21 21 13.93z" />
  </Svg>
);

export default SvgSharp;
