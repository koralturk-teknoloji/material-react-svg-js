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
    <Path d="m16.85 17.15 1.44-1.44-4.88-4.88-3.29 3.29a.996.996 0 0 1-1.41 0l-6-6.01A.996.996 0 1 1 4.12 6.7L9.41 12l3.29-3.29a.996.996 0 0 1 1.41 0l5.59 5.58 1.44-1.44a.5.5 0 0 1 .85.35v4.29c0 .28-.22.5-.5.5H17.2c-.44.01-.66-.53-.35-.84z" />
  </Svg>
);

export default SvgRound;
