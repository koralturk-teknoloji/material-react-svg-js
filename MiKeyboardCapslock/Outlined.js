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
    <Path d="M12 8.41 16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z" />
  </Svg>
);

export default SvgOutlined;
