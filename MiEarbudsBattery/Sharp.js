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
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M20 7V6h-2v1h-2v11h6V7zM5.38 16.5c-1.04 0-1.88-.84-1.88-1.87V10H6V6H4c-1.1 0-2 .9-2 2v6.63C2 16.49 3.51 18 5.37 18s3.37-1.51 3.37-3.37V9.37c0-1.04.84-1.87 1.87-1.87 1.04 0 1.87.84 1.87 1.87V14H10v4h2c1.1 0 2-.9 2-2V9.37C14 7.51 12.49 6 10.63 6 8.76 6 7.25 7.51 7.25 9.37v5.25c0 1.04-.84 1.88-1.87 1.88z" />
  </Svg>
);

export default SvgSharp;
