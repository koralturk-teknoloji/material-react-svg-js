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
      d="M21.18 11.8 24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98l2.82 2.82C5.17 9.45 8.41 8 12 8s6.83 1.45 9.18 3.8z"
      fillOpacity={0.3}
    />
    <Path d="M21.18 11.8C18.83 9.45 15.59 8 12 8s-6.83 1.45-9.18 3.8L12 21l9.18-9.2z" />
  </Svg>
);

export default SvgTwoTone;
