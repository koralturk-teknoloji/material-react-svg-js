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
    <Path d="M0 0h24v24H0V0z" fill="none" opacity={0.87} />
    <Path d="M6.29 8.11 10.18 12l-3.89 3.89A.996.996 0 1 0 7.7 17.3l4.59-4.59a.996.996 0 0 0 0-1.41L7.7 6.7a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41zM17 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z" />
  </Svg>
);

export default SvgRound;
