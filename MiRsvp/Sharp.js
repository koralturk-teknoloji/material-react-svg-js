import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSharp = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="M16 9h1.5l-1.75 6h-1.5L12.5 9H14l1 3.43L16 9zM5.14 13 6 15H4.5l-.85-2H2.5v2H1V9h5v4h-.86zm-.64-2.5h-2v1h2v-1zM23 13h-3.5v2H18V9h5v4zm-1.5-2.5h-2v1h2v-1zM11.5 9v1.5h-3v.75h3V15H7v-1.5h3v-.75H7V9h4.5z" />
  </Svg>
);

export default SvgSharp;