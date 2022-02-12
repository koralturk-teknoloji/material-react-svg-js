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
    <Path d="M16.03 19H3l4.5-7L3 5h13.03L21 12l-4.97 7zM6.5 17H15l3.5-5L15 7H6.5l3.5 5-3.5 5z" />
  </Svg>
);

export default SvgSharp;
