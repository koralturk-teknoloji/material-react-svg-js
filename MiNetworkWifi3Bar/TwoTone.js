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
      d="M2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07l-2.85 2.86A10.945 10.945 0 0 0 12 10c-2.31 0-4.46.71-6.23 1.93L2.92 9.07z"
      opacity={0.3}
    />
    <Path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98A16.88 16.88 0 0 0 12 4zM2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07l-2.85 2.86A10.945 10.945 0 0 0 12 10c-2.31 0-4.46.71-6.23 1.93L2.92 9.07z" />
  </Svg>
);

export default SvgTwoTone;
