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
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M4 17h16v5H4zM20 8l-6-6H4.01L4 11h16V8zm-7 1V3.5L18.5 9H13zM9 13h6v2H9zM17 13h6v2h-6zM1 13h6v2H1z" />
  </Svg>
);

export default SvgSharp;
