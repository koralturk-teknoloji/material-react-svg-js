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
    <Path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 18H7V6h10v12zm-6.66-3.71c.39.39 1.02.39 1.41 0l3.54-3.54a.996.996 0 1 0-1.41-1.41l-2.83 2.83-.71-.71a.996.996 0 1 0-1.41 1.41l1.41 1.42z" />
  </Svg>
);

export default SvgRound;
