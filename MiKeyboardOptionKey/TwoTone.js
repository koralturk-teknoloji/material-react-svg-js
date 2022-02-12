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
    <Path d="M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z" />
  </Svg>
);

export default SvgTwoTone;
