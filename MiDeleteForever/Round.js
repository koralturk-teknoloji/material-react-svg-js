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
    <Path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm3.17-6.41a.996.996 0 1 1 1.41-1.41L12 12.59l1.41-1.41a.996.996 0 1 1 1.41 1.41L13.41 14l1.41 1.41a.996.996 0 1 1-1.41 1.41L12 15.41l-1.41 1.41a.996.996 0 1 1-1.41-1.41L10.59 14l-1.42-1.41zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z" />
  </Svg>
);

export default SvgRound;