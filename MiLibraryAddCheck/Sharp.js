import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSharp = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path d="M22 2H6v16h16V2zm-9.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41 12.47 14zM4 6H2v16h16v-2H4V6z" />
    <Path d="M0 0h24v24H0V0z" fill="none" />
  </Svg>
);

export default SvgSharp;
