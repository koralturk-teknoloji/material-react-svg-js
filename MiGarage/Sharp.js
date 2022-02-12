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
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Circle cx={15} cy={13} r={1} />
    <Circle cx={9} cy={13} r={1} />
    <Path d="m8.33 7.5-.66 2h8.66l-.66-2z" />
    <Path d="M22 2H2v20h20V2zm-3 16.5h-2v-2H7v2H5v-7.31L6.89 5.5H17.1l1.9 5.69v7.31z" />
  </Svg>
);

export default SvgSharp;
