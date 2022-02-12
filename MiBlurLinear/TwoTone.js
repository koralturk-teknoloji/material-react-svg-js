import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgTwoTone = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="M17 16.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z" />
    <Circle cx={9} cy={12} r={1} />
    <Circle cx={13} cy={8} r={1} />
    <Circle cx={13} cy={16} r={1} />
    <Path d="M17 12.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z" />
    <Circle cx={13} cy={12} r={1} />
    <Path d="M3 3h18v2H3z" />
    <Circle cx={5} cy={8} r={1.5} />
    <Circle cx={5} cy={12} r={1.5} />
    <Circle cx={5} cy={16} r={1.5} />
    <Path d="M17 8.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z" />
    <Circle cx={9} cy={16} r={1} />
    <Circle cx={9} cy={8} r={1} />
    <Path d="M3 19h18v2H3z" />
  </Svg>
);

export default SvgTwoTone;
