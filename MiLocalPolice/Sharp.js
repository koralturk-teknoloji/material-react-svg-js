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
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="m14.5 12.59.9 3.88-3.4-2.05-3.4 2.05.9-3.87-3-2.59 3.96-.34L12 6.02l1.54 3.64 3.96.34-3 2.59zM3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4-9 4z" />
  </Svg>
);

export default SvgSharp;
