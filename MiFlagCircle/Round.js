import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgRound = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <G fill="none">
      <Path d="M0 0h24v24H0z" />
      <Path d="M0 0h24v24H0z" />
    </G>
    <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13h-3.38c-.38 0-.73-.21-.89-.55L12 13H9.5v4.25c0 .41-.34.75-.75.75S8 17.66 8 17.25V8c0-.55.45-1 1-1h4.38c.38 0 .73.21.89.55L15 9h2c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1z" />
  </Svg>
);

export default SvgRound;
