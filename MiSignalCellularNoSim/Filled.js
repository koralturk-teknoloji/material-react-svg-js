import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFilled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path
      d="M-618-2872H782V728H-618zM-1 0h26v24H-1zm1 0h24v24H0z"
      fill="none"
    />
    <Path d="M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88 2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z" />
    <Path d="M.01 0h24v24h-24z" fill="none" />
  </Svg>
);

export default SvgFilled;
