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
    <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.5 7.5c0 .28-.22.5-.5.5H8.5v2h1v-.5c0-.29.25-.53.55-.5.26.02.45.26.45.52V13c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1H10c.28 0 .5.22.5.5zM12 10c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5zm2 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5s-.22.5-.5.5h-1.5v.5h1c.28 0 .5.22.5.5s-.22.5-.5.5h-1v1c0 .28-.22.5-.5.5z" />
  </Svg>
);

export default SvgRound;
