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
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15H3V6h18v13zM9 8h2v2H9V8zM5 8h2v2H5V8zm3 8h8v1H8v-1zm5-8h2v2h-2V8zm-4 4h2v2H9v-2zm-4 0h2v2H5v-2zm8 0h2v2h-2v-2zm4-4h2v2h-2V8zm0 4h2v2h-2v-2z" />
  </Svg>
);

export default SvgOutlined;
