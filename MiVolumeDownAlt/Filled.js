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
    <Path d="M14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02S15.48 8.71 14 7.97zM3 9v6h4l5 5V4L7 9H3z" />
  </Svg>
);

export default SvgFilled;
