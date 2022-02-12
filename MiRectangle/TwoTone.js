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
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M4 6h16v12H4z" opacity={0.3} />
    <Path d="M2 4v16h20V4H2zm18 14H4V6h16v12z" />
  </Svg>
);

export default SvgTwoTone;
