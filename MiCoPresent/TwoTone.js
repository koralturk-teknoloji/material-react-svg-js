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
    <Circle cx={9} cy={10} r={2} opacity={0.3} />
    <Path
      d="M14.48 18.34C13.29 17.73 11.37 17 9 17c-2.37 0-4.29.73-5.48 1.34-.62.32-.52.94-.52 1.66h12c0-.71.11-1.34-.52-1.66z"
      opacity={0.3}
    />
    <Path d="M21 3H3c-1.1 0-2 .9-2 2v8h2V5h18v16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    <Path d="M13 10c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm-6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM15.39 16.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM15 20H3c0-.72-.1-1.34.52-1.66C4.71 17.73 6.63 17 9 17c2.37 0 4.29.73 5.48 1.34.63.32.52.95.52 1.66z" />
  </Svg>
);

export default SvgTwoTone;
