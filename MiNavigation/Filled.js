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
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path d="M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
  </Svg>
);

export default SvgFilled;
