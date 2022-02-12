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
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M3 2h18v2H3zM3 20h18v2H3zM3 14h18v2H3zM3 8h18v2H3z" />
  </Svg>
);

export default SvgFilled;
