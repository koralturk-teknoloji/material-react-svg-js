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
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="m18 6.83 1.59 1.58L21 7l-4-4-4 4 1.41 1.41L16 6.83V13H6v8h2v-6h10z" />
  </Svg>
);

export default SvgSharp;
