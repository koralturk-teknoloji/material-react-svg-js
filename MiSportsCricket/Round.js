import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";

const SvgRound = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <G fill="none">
      <Path d="M0 0h24v24H0z" />
      <Path d="M0 0h24v24H0z" />
    </G>
    <Path d="M15.05 12.81 6.56 4.32a.996.996 0 0 0-1.41 0L2.32 7.15a.996.996 0 0 0 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83a.996.996 0 0 0 0-1.41zM14.34 17.76l3.53 3.53c.39.39 1.03.39 1.42 0 .39-.39.39-1.03 0-1.42l-3.53-3.53-1.42 1.42z" />
    <Circle cx={18.5} cy={5.5} r={3.5} />
  </Svg>
);

export default SvgRound;
