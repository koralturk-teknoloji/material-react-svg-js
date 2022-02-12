import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRound = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="M17 18H7V6h10c0 .55.45 1 1 1s1-.45 1-1V3c0-1.1-.9-2-2-2L7 1.01C5.9 1.01 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1s-1 .45-1 1z" />
    <Path d="m21.65 11.65-2.79-2.79a.501.501 0 0 0-.86.35V11h-4c-.55 0-1 .45-1 1s.45 1 1 1h4v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7z" />
  </Svg>
);

export default SvgRound;
