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
    <Path d="M12 3 4 9v12h16V9l-8-6zm4 13.06L14 15v2H8v-6h6v2l2-1.06v4.12z" />
  </Svg>
);

export default SvgSharp;
