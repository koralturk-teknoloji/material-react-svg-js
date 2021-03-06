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
    <Path d="M2 2v20l4-4h16V2H2zm17 11-2.5-1.5L14 13V5h5v8z" />
  </Svg>
);

export default SvgSharp;
