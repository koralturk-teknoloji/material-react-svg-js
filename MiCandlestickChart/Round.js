import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

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
    <Path d="M8 4c-.55 0-1 .45-1 1v1H6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H9V5c0-.55-.45-1-1-1zM18 8h-1V5c0-.55-.45-1-1-1s-1 .45-1 1v3h-1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h1v4c0 .55.45 1 1 1s1-.45 1-1v-4h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z" />
  </Svg>
);

export default SvgRound;
