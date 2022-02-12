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
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="M16 7.08c0 1.77-.84 3.25-2 3.82V21h-2V10.9c-1.16-.57-2-2.05-2-3.82C10.01 4.83 11.35 3 13 3c1.66 0 3 1.83 3 4.08zM17 3v18h2v-8h2V7c0-1.76-1.24-4-4-4zM8.28 3h-.72v4h-.84V3H5.28v4h-.84V3H3v8h2v10h2V11h2V3h-.72z" />
  </Svg>
);

export default SvgSharp;
