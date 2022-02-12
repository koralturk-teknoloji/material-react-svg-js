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
    <Path d="m14 7-5 5 5 5V7z" />
    <Path d="M24 0v24H0V0h24z" fill="none" />
  </Svg>
);

export default SvgFilled;
