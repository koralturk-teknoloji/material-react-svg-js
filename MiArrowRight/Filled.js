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
    <Path d="m10 17 5-5-5-5v10z" />
    <Path d="M0 24V0h24v24H0z" fill="none" />
  </Svg>
);

export default SvgFilled;
