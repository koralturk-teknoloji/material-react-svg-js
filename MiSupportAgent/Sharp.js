import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgSharp = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Circle cx={9} cy={13} r={1} />
    <Circle cx={15} cy={13} r={1} />
    <Path d="M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z" />
    <Path d="M20.99 12c-.11-5.37-4.31-9-8.99-9-4.61 0-8.85 3.53-8.99 9H2v6h3v-5.81c0-3.83 2.95-7.18 6.78-7.29a7.007 7.007 0 0 1 7.22 7V19h-8v2h10v-3h1v-6h-1.01z" />
  </Svg>
);

export default SvgSharp;