import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFilled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path d="M0 24V0h24v24H0z" fill="none" />
    <Path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" />
  </Svg>
);

export default SvgFilled;
