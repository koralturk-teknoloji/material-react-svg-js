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
      opacity={0.3}
      d="m4.417 18.174 5.466-5.466 1.414 1.414-5.466 5.466z"
    />
    <Path d="m20 7 .94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zM14.17 8.42l1.41 1.41-1.46 1.46 1.41 1.41 2.17-2.17a.996.996 0 0 0 0-1.41l-2.83-2.83a.984.984 0 0 0-.7-.29c-.26 0-.51.1-.71.29l-2.17 2.17 1.41 1.41 1.47-1.45zM2.81 2.81 1.39 4.22l7.07 7.07-6.17 6.17a.996.996 0 0 0 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l6.17-6.17 7.07 7.07 1.41-1.41L2.81 2.81zm3.02 16.78-1.41-1.41 5.46-5.46 1.41 1.41-5.46 5.46z" />
  </Svg>
);

export default SvgTwoTone;
