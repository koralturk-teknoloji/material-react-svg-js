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
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path d="M9.65 7H18V3.01H6v.35zm1.01 1.01 9 8.99H22v-5.99c0-1.66-1.34-3-3-3h-8.34zM19 10c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM1.41 1.6 0 3.01l5 5c-1.66 0-3 1.33-3 2.99v6h4v4h12l2.95 2.96 1.41-1.41L1.41 1.6zM8 19.01V15h4l4 4-8 .01z" />
  </Svg>
);

export default SvgSharp;
