import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgOutlined = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="M21 11.01 3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z" />
  </Svg>
);

export default SvgOutlined;
