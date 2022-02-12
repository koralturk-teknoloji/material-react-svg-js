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
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      opacity={0.3}
      d="M8.88 5H6.24l-1.5 3h2.64zM19.26 8l-1.5-3h-2.64l1.5 3zM11 16.68V10H5.44zM13 16.68 18.56 10H13zM12.88 5h-1.76l-1.5 3h4.76z"
    />
    <Path d="M19 3H5L2 9l10 12L22 9l-3-6zm-1.24 2 1.5 3h-2.65l-1.5-3h2.65zM6.24 5h2.65l-1.5 3H4.74l1.5-3zM11 16.68 5.44 10H11v6.68zM9.62 8l1.5-3h1.76l1.5 3H9.62zM13 16.68V10h5.56L13 16.68z" />
  </Svg>
);

export default SvgTwoTone;
