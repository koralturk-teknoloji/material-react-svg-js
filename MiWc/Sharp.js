import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSharp = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path d="M.01 0h24v24h-24V0z" fill="none" />
    <Path d="M5.5 22v-7.5H4V7h7v7.5H9.5V22h-4zM18 22v-6h3l-3-9h-3l-3 9h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z" />
  </Svg>
);

export default SvgSharp;