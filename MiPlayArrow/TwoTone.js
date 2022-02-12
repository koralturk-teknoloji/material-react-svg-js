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
    <Path d="M10 8.64v6.72L15.27 12z" opacity={0.3} />
    <Path d="m8 19 11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z" />
  </Svg>
);

export default SvgTwoTone;
