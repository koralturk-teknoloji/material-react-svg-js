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
    <Path fill="none" d="M0 0h24v24H0z" />
    <Circle cx={20} cy={12} r={2} />
    <Circle cx={4} cy={12} r={2} />
    <Circle cx={12} cy={20} r={2} />
    <Path d="m7.89 14.65-2.94 2.93a.996.996 0 1 0 1.41 1.41l2.94-2.93a.996.996 0 1 0-1.41-1.41zM6.41 4.94A.996.996 0 1 0 5 6.35l2.93 2.94c.39.39 1.02.39 1.42 0 .38-.39.38-1.02-.01-1.41L6.41 4.94zM16.12 14.65c-.39-.39-1.02-.39-1.42 0a.996.996 0 0 0 0 1.41L17.64 19a.996.996 0 1 0 1.41-1.41l-2.93-2.94zM16.06 9.33l2.99-2.98c.39-.4.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-2.99 2.98c-.39.39-.39 1.02 0 1.42.39.39 1.02.39 1.41 0z" />
    <Circle cx={12} cy={4} r={2} />
  </Svg>
);

export default SvgRound;
