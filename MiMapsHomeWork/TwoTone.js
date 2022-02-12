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
      d="M17 11h2v2h-2v2h2v2h-2v2h4V5h-9v1.4l5 3.57V11zm0-4h2v2h-2V7z"
      opacity={0.3}
    />
    <Path d="M10 3v1.97l.96.69L12 6.4V5h9v14h-4v2h6V3z" />
    <Path opacity={0.3} d="M3 12v7h2v-5h6v5h2v-7L8 8.5z" />
    <Path d="M17 7h2v2h-2zM17 11h2v2h-2zM17 15h2v2h-2zM1 11v10h6v-5h2v5h6V11L8 6l-7 5zm12 8h-2v-5H5v5H3v-7l5-3.5 5 3.5v7z" />
  </Svg>
);

export default SvgTwoTone;
