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
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="m22 10-6-6H2v16h20V10zm-7-4.5 5.5 5.5H15V5.5z" />
  </Svg>
);

export default SvgSharp;
