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
    <Path d="M18 13h3v2h-3zM12 12v2h-2v4h2v2h5v-8z" />
    <Path d="M5 11h7V4H4v2h6v3H3v8h6v-2H5zM18 17h3v2h-3z" />
  </Svg>
);

export default SvgSharp;
