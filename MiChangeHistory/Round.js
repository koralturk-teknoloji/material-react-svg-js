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
    <Path d="M12 7.77 18.39 18H5.61L12 7.77m-.85-2.41-8.2 13.11c-.41.67.07 1.53.85 1.53h16.4a1 1 0 0 0 .85-1.53l-8.2-13.11a1 1 0 0 0-1.7 0z" />
  </Svg>
);

export default SvgRound;
