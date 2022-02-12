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
    <Path d="M22 8V2L2 22h16V8h4z" fillOpacity={0.3} />
    <Path d="M18 22V6L2 22h16zm2-12v8h2v-8h-2zm0 12h2v-2h-2v2z" />
  </Svg>
);

export default SvgTwoTone;
