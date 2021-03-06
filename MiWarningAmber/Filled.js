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
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2z" />
    <Path d="M13 16h-2v2h2zM13 10h-2v5h2z" />
  </Svg>
);

export default SvgFilled;
