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
      d="M5 19h14V5H5v14zm7-10h1.5v2.25L15.25 9H17l-2.25 3L17 15h-1.75l-1.75-2.25V15H12V9zM7 9h3v6H8.5v-4.5H7V9z"
      opacity={0.3}
    />
    <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
    <Path d="M8.5 15H10V9H7v1.5h1.5zM13.5 12.75 15.25 15H17l-2.25-3L17 9h-1.75l-1.75 2.25V9H12v6h1.5z" />
  </Svg>
);

export default SvgTwoTone;
