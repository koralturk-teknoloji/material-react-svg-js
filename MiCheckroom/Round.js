import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRound = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M21.6 18.2 13 11.75v-.91a3.496 3.496 0 0 0-.18-6.75c-1.76-.4-3.37.53-4.02 1.98-.3.67.18 1.43.91 1.43.39 0 .75-.22.9-.57A1.5 1.5 0 0 1 12 6c.83 0 1.5.67 1.5 1.5 0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8zM6 18l6-4.5 6 4.5H6z" />
  </Svg>
);

export default SvgRound;
