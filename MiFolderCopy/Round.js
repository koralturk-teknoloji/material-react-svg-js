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
    <Path d="M2 6c-.55 0-1 .45-1 1v12c0 1.1.9 2 2 2h16c.55 0 1-.45 1-1s-.45-1-1-1H3V7c0-.55-.45-1-1-1z" />
    <Path d="M21 4h-7l-1.41-1.41c-.38-.38-.89-.59-1.42-.59H7c-1.1 0-1.99.9-1.99 2L5 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
  </Svg>
);

export default SvgRound;
