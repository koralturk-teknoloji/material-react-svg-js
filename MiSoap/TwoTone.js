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
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M14.25 6c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75M20 5.5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5M10 21H4c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7 9.87V12h3v9z"
      opacity={0.3}
    />
    <Path d="M14.25 6c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75m0-1.5C13.01 4.5 12 5.51 12 6.75S13.01 9 14.25 9s2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25zm5.75 1c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5M20 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.5-3c-.83 0-1.5.67-1.5 1.5S15.67 4 16.5 4 18 3.33 18 2.5 17.33 1 16.5 1zm4.25 15a1.25 1.25 0 0 0 0-2.5H12v-1h6.75c.69 0 1.25-.56 1.25-1.25 0-.67-.53-1.2-1.18-1.24L8.87 10l1.48-2.6c.09-.17.14-.34.14-.54 0-.26-.09-.5-.26-.7L9.12 5l-7.18 6.8c-.6.56-.94 1.35-.94 2.17V20c0 1.66 1.34 3 3 3h13.75a1.25 1.25 0 0 0 0-2.5H12v-1h7.75a1.25 1.25 0 0 0 0-2.5H12v-1h8.75zM10 21H4c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7 9.87V12h3v9z" />
  </Svg>
);

export default SvgTwoTone;
