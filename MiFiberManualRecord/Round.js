import * as React from "react";
import Svg, { Circle } from "react-native-svg";

const SvgRound = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Circle cx={12} cy={12} r={8} />
  </Svg>
);

export default SvgRound;
