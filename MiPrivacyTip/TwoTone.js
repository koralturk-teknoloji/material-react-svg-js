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
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12 3.19 5 6.3V11c0 4.52 2.98 8.69 7 9.93 4.02-1.23 7-5.41 7-9.93V6.3l-7-3.11zM13 17h-2v-6h2v6zm0-8h-2V7h2v2z"
      opacity={0.3}
    />
    <Path d="m12 3.19 7 3.11V11c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z" />
  </Svg>
);

export default SvgTwoTone;
