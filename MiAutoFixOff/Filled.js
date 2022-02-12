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
    <Path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none" />
    <Path d="m23 1-2.5 1.4L18 1l1.4 2.5L18 6l2.5-1.4L23 6l-1.4-2.5L23 1zm-8.34 6.22 2.12 2.12-2.44 2.44.81.81 2.55-2.55a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0L11.4 8.84l.81.81 2.45-2.43zm-.78 6.65-3.75-3.75-6.86-6.86L2 4.53l6.86 6.86-6.57 6.57a.996.996 0 0 0 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0l6.57-6.57L19.47 22l1.27-1.27-6.86-6.86z" />
  </Svg>
);

export default SvgFilled;