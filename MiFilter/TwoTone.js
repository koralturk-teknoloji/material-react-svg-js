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
      d="M7 17h14V3H7v14zm4.25-5.53 1.96 2.36 2.75-3.54L19.5 15h-11l2.75-3.53z"
      opacity={0.3}
    />
    <Path d="M1 21c0 1.1.9 2 2 2h16v-2H3V5H1v16zM21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-5.04-6.71-2.75 3.54-1.96-2.36L8.5 15h11z" />
  </Svg>
);

export default SvgTwoTone;
