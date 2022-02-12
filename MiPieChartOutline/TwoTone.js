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
    <Path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 17.94c-3.93-.5-7-3.88-7-7.94s3.07-7.44 7-7.93v15.87zm2-.01V13h6.93A8.002 8.002 0 0 1 13 19.93zM13 11V4.07c3.61.45 6.48 3.33 6.93 6.93H13z" />
  </Svg>
);

export default SvgTwoTone;
