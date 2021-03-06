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
    <Path d="M8 8h8v8H8z" opacity={0.3} />
    <Path d="M6 18h12V6H6v12zM8 8h8v8H8V8z" />
  </Svg>
);

export default SvgTwoTone;
