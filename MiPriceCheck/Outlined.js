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
    <Path d="M11 13V9c0-.55-.45-1-1-1H6V6h5V4H8.5V3h-2v1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4v2H4v2h2.5v1h2v-1H10c.55 0 1-.45 1-1zM19.59 12.52l-5.66 5.65-2.83-2.83-1.41 1.42L13.93 21 21 13.93z" />
  </Svg>
);

export default SvgOutlined;
