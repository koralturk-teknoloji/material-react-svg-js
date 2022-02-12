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
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="M5 9h14v6H5zM11 2h2v3h-2zM17.286 6.399l1.79-1.803 1.42 1.41-1.79 1.802zM11 19h2v3h-2zM17.29 17.71l1.79 1.8 1.42-1.42-1.8-1.79zM3.495 6.01l1.407-1.408L6.69 6.391 5.284 7.798zM3.492 18.076l1.803-1.79 1.409 1.42-1.803 1.79z" />
  </Svg>
);

export default SvgFilled;
