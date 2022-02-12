import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgSharp = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <G fill="none">
      <Path d="M0 0h24v24H0z" />
      <Path d="M0 0h24v24H0z" />
      <Path d="M0 0h24v24H0z" />
    </G>
    <Path d="m4 18 8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
  </Svg>
);

export default SvgSharp;
