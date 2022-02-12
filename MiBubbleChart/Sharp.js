import * as React from "react";
import Svg, { Circle } from "react-native-svg";

const SvgSharp = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Circle cx={7.2} cy={14.4} r={3.2} />
    <Circle cx={14.8} cy={18} r={2} />
    <Circle cx={15.2} cy={8.8} r={4.8} />
  </Svg>
);

export default SvgSharp;
