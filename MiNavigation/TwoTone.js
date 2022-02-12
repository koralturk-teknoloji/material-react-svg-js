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
      d="m7.72 17.7 3.47-1.53.81-.36.81.36 3.47 1.53L12 7.27z"
      opacity={0.3}
    />
    <Path d="m4.5 20.29.71.71L12 18l6.79 3 .71-.71L12 2 4.5 20.29zm8.31-4.12-.81-.36-.81.36-3.47 1.53L12 7.27l4.28 10.43-3.47-1.53z" />
  </Svg>
);

export default SvgTwoTone;
