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
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" />
    <Path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10-2.5-1.5L15 12V4h5v8z" />
  </Svg>
);

export default SvgFilled;
