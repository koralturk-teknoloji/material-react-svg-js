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
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="M12.04 8.04h-.09l-1.6 4.55h3.29z" />
    <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 14.41-.78-2.22H9.78l-.79 2.22c-.12.35-.46.59-.83.59a.887.887 0 0 1-.83-1.2l3.34-8.88C10.88 6.37 11.4 6 12 6c.59 0 1.12.37 1.33.92l3.34 8.88c.22.58-.21 1.2-.83 1.2-.38 0-.72-.24-.84-.59z" />
  </Svg>
);

export default SvgRound;
