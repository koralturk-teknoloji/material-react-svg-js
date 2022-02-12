import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgOutlined = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Circle cx={6} cy={14} r={1} />
    <Circle cx={6} cy={18} r={1} />
    <Circle cx={6} cy={10} r={1} />
    <Circle cx={3} cy={10} r={0.5} />
    <Circle cx={6} cy={6} r={1} />
    <Circle cx={3} cy={14} r={0.5} />
    <Circle cx={10} cy={21} r={0.5} />
    <Circle cx={10} cy={3} r={0.5} />
    <Circle cx={10} cy={6} r={1} />
    <Circle cx={10} cy={14} r={1.5} />
    <Circle cx={10} cy={10} r={1.5} />
    <Circle cx={10} cy={18} r={1} />
    <Path d="M12 3v2c3.86 0 7 3.14 7 7s-3.14 7-7 7v2c4.96 0 9-4.04 9-9s-4.04-9-9-9z" />
  </Svg>
);

export default SvgOutlined;
