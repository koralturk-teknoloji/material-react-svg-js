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
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path
      d="m13.99 15.41-4-4-4 4-.99-.99V19h14v-6.57l-1.01-1.01zM5 11.59l.99 1 4-4 4 4 4-4.01L19 9.59V5H5z"
      opacity={0.3}
    />
    <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-4.58l.99.99 4-4 4 4 4-3.99L19 12.43V19zm0-9.41-1.01-1.01-4 4.01-4-4-4 4-.99-1V5h14v4.59z" />
  </Svg>
);

export default SvgTwoTone;