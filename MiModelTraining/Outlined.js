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
    <Path d="M15.5 13.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5zm-2.5 6h-2V21h2v-1.5zm6-6.5c0 1.68-.59 3.21-1.58 4.42l1.42 1.42a8.978 8.978 0 0 0-1-12.68l-1.42 1.42A6.993 6.993 0 0 1 19 13zm-3-8-4-4v3a9 9 0 0 0-9 9c0 2.23.82 4.27 2.16 5.84l1.42-1.42A6.938 6.938 0 0 1 5 13c0-3.86 3.14-7 7-7v3l4-4z" />
  </Svg>
);

export default SvgOutlined;
