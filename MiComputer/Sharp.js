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
    <Path d="m20 18 2-2V4H2v12l2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
  </Svg>
);

export default SvgSharp;
