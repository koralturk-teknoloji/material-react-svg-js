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
    <Path d="M0 0h24v24H0z" fill="none" />
    <Circle cx={14} cy={10} r={1.5} />
    <Circle cx={14} cy={18} r={1} />
    <Circle cx={14} cy={14} r={1.5} />
    <Circle cx={14} cy={6} r={1} />
    <Path d="M3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14.5 3c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5zM21 14.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z" />
    <Circle cx={18} cy={18} r={1} />
    <Path d="M13.5 21c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5zM21 10.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z" />
    <Circle cx={18} cy={14} r={1} />
    <Circle cx={18} cy={6} r={1} />
    <Circle cx={6} cy={18} r={1} />
    <Circle cx={6} cy={14} r={1} />
    <Path d="M3.5 14c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5z" />
    <Circle cx={10} cy={6} r={1} />
    <Circle cx={6} cy={10} r={1} />
    <Circle cx={6} cy={6} r={1} />
    <Path d="M9.5 21c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5z" />
    <Circle cx={10} cy={18} r={1} />
    <Path d="M10.5 3c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5z" />
    <Circle cx={10} cy={14} r={1.5} />
    <Circle cx={10} cy={10} r={1.5} />
    <Circle cx={18} cy={10} r={1} />
  </Svg>
);

export default SvgTwoTone;
