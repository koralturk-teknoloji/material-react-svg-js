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
    <Path d="m5.64 9-.6 3h13.92l-.6-3z" opacity={0.3} />
    <Path d="m4 7-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5H4zm8 11H6v-4h6v4zm-6.96-6 .6-3h12.72l.6 3H5.04zM4 4h16v2H4z" />
  </Svg>
);

export default SvgTwoTone;
