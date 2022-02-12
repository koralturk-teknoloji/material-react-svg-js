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
    <Path fill="none" d="M0 0h24v24H0z" />
    <Circle cx={20} cy={12} r={2} />
    <Circle cx={4} cy={12} r={2} />
    <Circle cx={12} cy={20} r={2} />
    <Path d="m13.943 8.619 4.404-4.392 1.413 1.416-4.405 4.392zM8.32 9.68l.31.32 1.42-1.41-4.02-4.04h-.01l-.31-.32-1.42 1.41 4.02 4.05zM15.41 13.94 14 15.35l3.99 4.01.35.35 1.42-1.41-3.99-4.01zM8.59 13.95l-4.03 4.01-.32.33 1.41 1.41 4.03-4.02.33-.32z" />
    <Circle cx={12} cy={4} r={2} />
  </Svg>
);

export default SvgTwoTone;
