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
    <Path
      d="M7 13h10v-2c0-.88.39-1.67 1-2.22V6c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v2.78c.61.55 1 1.34 1 2.22v2z"
      opacity={0.3}
    />
    <Path
      d="M20 10c-.55 0-1 .45-1 1v4H5v-4c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1z"
      opacity={0.3}
    />
    <Path d="M20 8V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3zM6 6c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2H7v-2c0-.88-.39-1.67-1-2.22V6zm15 10c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h14v-4c0-.55.45-1 1-1s1 .45 1 1v5z" />
  </Svg>
);

export default SvgTwoTone;