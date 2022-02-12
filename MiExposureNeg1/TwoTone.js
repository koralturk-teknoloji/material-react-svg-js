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
    <Path d="M19 18V5h-.3L14 6.7v1.7l3-1.02V18zM4 11h8v2H4z" />
  </Svg>
);

export default SvgTwoTone;
