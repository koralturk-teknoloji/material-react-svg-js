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
    <Path d="M10 3h11v5H10zM3 10h5v11H3zM3 3h5v5H3zM18 9l-4 4h3v4h-4v-3l-4 4 4 4v-3h6v-6h3z" />
  </Svg>
);

export default SvgSharp;
