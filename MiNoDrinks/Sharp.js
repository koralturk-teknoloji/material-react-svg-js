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
    <Path d="M21.19 21.19 2.81 2.81 1.39 4.22l8.23 8.23L11 14v5H6v2h12v-.17l1.78 1.78 1.41-1.42zM13 19v-3.17L16.17 19H13zM7.83 5l-2-2H21v2l-6.2 6.97L9.83 7h6.74l1.78-2H7.83z" />
  </Svg>
);

export default SvgSharp;
