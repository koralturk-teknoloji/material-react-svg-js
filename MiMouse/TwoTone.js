import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTwoTone = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path
      d="M13 3.16V9h5a6.005 6.005 0 0 0-5-5.84zm-2 0C8.19 3.63 6.04 6.06 6 9h5V3.16zM11 11H6v4c0 3.31 2.69 6 6 6s6-2.69 6-6v-4h-7z"
      opacity={0.3}
    />
    <Path d="M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6c0 4.42 3.58 8 8 8s8-3.58 8-8V9zm-7-5.84c2.81.47 4.96 2.9 5 5.84h-5V3.16zm-2 0V9H6a6.005 6.005 0 0 1 5-5.84zM18 15c0 3.31-2.69 6-6 6s-6-2.69-6-6v-4h12v4z" />
  </Svg>
);

export default SvgTwoTone;
