import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgRound = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <G fill="none">
      <Path d="M0 0h24v24H0z" />
      <Path d="M0 0h24v24H0z" />
    </G>
    <Path d="M20 3h-8c-.55 0-1 .45-1 1v1.61l.01.01 5 4.5c.63.56.99 1.38.99 2.23V13h2v2h-2v2h2v2h-2v2h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-5 4h-2V5h2v2zm4 4h-2V9h2v2zm0-4h-2V5h2v2z" />
    <Path d="M15 20v-7.65a1 1 0 0 0-.33-.74l-5-4.5A.96.96 0 0 0 9 6.85c-.24 0-.48.09-.67.26l-5 4.5a.97.97 0 0 0-.33.74V20c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-4h4v4c0 .55.45 1 1 1h2c.55 0 1-.45 1-1z" />
  </Svg>
);

export default SvgRound;
