import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRound = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M1.61 12.19c.34.44.96.52 1.4.19l.99-.76V20c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-8.38l.99.76c.44.34 1.07.25 1.4-.19a.992.992 0 0 0-.19-1.4l-9.6-7.33c-.36-.27-.86-.27-1.21 0l-9.6 7.33c-.43.34-.52.97-.18 1.4zM8 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
  </Svg>
);

export default SvgRound;