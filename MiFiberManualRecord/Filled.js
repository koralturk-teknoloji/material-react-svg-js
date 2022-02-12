import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgFilled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path d="M24 24H0V0h24v24z" fill="none" />
    <Circle cx={12} cy={12} r={8} />
  </Svg>
);

export default SvgFilled;
