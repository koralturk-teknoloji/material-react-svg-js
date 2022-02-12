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
    <Path d="M12 7.77 5.61 18h12.78z" opacity={0.3} />
    <Path d="M12 4 2 20h20L12 4zm0 3.77L18.39 18H5.61L12 7.77z" />
  </Svg>
);

export default SvgTwoTone;
