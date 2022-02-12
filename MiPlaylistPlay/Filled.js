import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFilled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M3 10h11v2H3zM3 6h11v2H3zM3 14h7v2H3zM16 13v8l6-4z" />
  </Svg>
);

export default SvgFilled;
