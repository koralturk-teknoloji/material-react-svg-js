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
    <Path
      opacity={0.3}
      d="M8.5 6H11v12H8.5zM13 6h2.5v12H13zM4 6h2.5v12H4zM17.5 6H20v12h-2.5z"
    />
    <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6.5 18H4V6h2.5v12zm4.5 0H8.5V6H11v12zm4.5 0H13V6h2.5v12zm4.5 0h-2.5V6H20v12z" />
  </Svg>
);

export default SvgTwoTone;
