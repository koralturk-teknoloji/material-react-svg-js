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
    <Path
      d="M0 0h24v24H0V0zm0 0h24v24H0V0zm11.75 11.47-.11-.11.11.11z"
      fill="none"
    />
    <Path d="M8 5.19V5l11 7-2.55 1.63L8 5.19zm12 14.54-5.11-5.11L8 7.73 4.27 4 3 5.27l5 5V19l5.33-3.4 5.4 5.4L20 19.73z" />
  </Svg>
);

export default SvgFilled;
