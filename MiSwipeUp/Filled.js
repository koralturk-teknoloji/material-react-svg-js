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
    <Path d="M2.06 5.56 1 4.5 4.5 1 8 4.5 6.94 5.56 5.32 3.94a10.457 10.457 0 0 0 1.88 8.99L6.13 14A11.974 11.974 0 0 1 3.5 6.5c0-.92.1-1.82.3-2.68L2.06 5.56zm11.79 6.06-2.68-5.37a1.498 1.498 0 0 0-2.01-.67c-.75.38-1.05 1.28-.68 2.02l4.81 9.6-3.24.8c-.33.09-.59.33-.7.66L9 19.78l6.19 2.25c.5.17 1.28.02 1.75-.22l5.51-2.75c.89-.45 1.32-1.48 1-2.42l-1.43-4.27a2 2 0 0 0-1.9-1.37h-4.56c-.31 0-.62.07-.89.21l-.82.41" />
  </Svg>
);

export default SvgFilled;
