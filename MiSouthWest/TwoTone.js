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
    <Path d="M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z" />
  </Svg>
);

export default SvgTwoTone;
