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
    <Path d="M19 13v5c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1zm-6-.33 1.88-1.88a.996.996 0 1 1 1.41 1.41l-3.59 3.59a.996.996 0 0 1-1.41 0L7.7 12.2a.996.996 0 1 1 1.41-1.41L11 12.67V4c0-.55.45-1 1-1s1 .45 1 1v8.67z" />
  </Svg>
);

export default SvgRound;
