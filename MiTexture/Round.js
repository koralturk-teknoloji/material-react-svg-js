import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRound = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="M19.58 3.08 3.15 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L21 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.95 3l-8.88 8.88v2.83L14.78 3h-2.83zM5.07 3c-1.1 0-2 .9-2 2v2l4-4h-2zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83l8.88-8.88V9.29L9.36 21z" />
  </Svg>
);

export default SvgRound;
