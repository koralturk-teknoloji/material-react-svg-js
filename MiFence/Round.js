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
    <Path d="M21 11c0-.55-.45-1-1-1h-1V7l-2.29-2.29a.996.996 0 0 0-1.41 0L14 6l-1.29-1.29a.996.996 0 0 0-1.41 0L10 6 8.71 4.71a.996.996 0 0 0-1.41 0L5 7v3H4c-.55 0-1 .45-1 1s.45 1 1 1h1v2H4c-.55 0-1 .45-1 1s.45 1 1 1h1v3c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h1c.55 0 1-.45 1-1zm-5-4.17 1 1V10h-2V7.83l.41-.41.59-.59zm-4 0 .59.59.41.41V10h-2V7.83l.41-.41.59-.59zM11 14v-2h2v2h-2zm2 2v2h-2v-2h2zM7 7.83l1-1 .59.59.41.41V10H7V7.83zM7 12h2v2H7v-2zm0 4h2v2H7v-2zm10 2h-2v-2h2v2zm0-4h-2v-2h2v2z" />
  </Svg>
);

export default SvgRound;