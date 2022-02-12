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
    <Path d="M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z" />
  </Svg>
);

export default SvgFilled;
