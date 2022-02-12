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
    <Path d="M17.03 5H3v13.99l14.03.01L22 12l-4.97-7zM16 17H5V7h11l3.55 5L16 17z" />
  </Svg>
);

export default SvgSharp;
