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
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="m19 18 2 1V1H7v2h12v15zM17 5H3v18l7-3 7 3V5z" />
  </Svg>
);

export default SvgSharp;
