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
    <Path d="M4 18h11c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h8c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm17.3 7.88L17.42 12l2.88-2.88a.996.996 0 1 0-1.41-1.41L15.3 11.3a.996.996 0 0 0 0 1.41l3.59 3.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z" />
    <Path d="M0 0h24v24H0V0z" fill="none" />
  </Svg>
);

export default SvgRound;