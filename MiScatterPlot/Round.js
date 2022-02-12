import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgRound = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Circle cx={7} cy={14} r={3} />
    <Circle cx={11} cy={6} r={3} />
    <Circle cx={16.6} cy={17.6} r={3} />
  </Svg>
);

export default SvgRound;
