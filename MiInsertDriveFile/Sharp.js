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
    <Path d="M4.01 2 4 22h16V8l-6-6H4.01zM13 9V3.5L18.5 9H13z" />
  </Svg>
);

export default SvgSharp;
