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
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M13 18H4V8l8 5 8-5v5h-2c-2.76 0-5 2.24-5 5zm-1-7L4 6h16l-8 5z"
      opacity={0.3}
    />
    <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l8 5 8-5v5h2V6c0-1.1-.9-2-2-2zm-8 7L4 6h16l-8 5zm7 4 4 4-4 4v-3h-4v-2h4v-3z" />
  </Svg>
);

export default SvgTwoTone;
