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
      d="M4 4h7v7H4zM4 13h7v7H4zM13 13h7v7h-7zM13 4h7v7h-7z"
    />
    <Path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-9 18H4v-7h7v7zm0-9H4V4h7v7zm9 9h-7v-7h7v7zm0-9h-7V4h7v7z" />
  </Svg>
);

export default SvgTwoTone;
