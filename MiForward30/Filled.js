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
    <Path d="M18 13c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6v4l5-5-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8h-2z" />
    <Path d="M10.06 15.38c-.29 0-.62-.17-.62-.54h-.85c0 .97.9 1.23 1.45 1.23.87 0 1.51-.46 1.51-1.25 0-.66-.45-.9-.71-1 .11-.05.65-.32.65-.92 0-.21-.05-1.22-1.44-1.22-.62 0-1.4.35-1.4 1.16h.85c0-.34.31-.48.57-.48.59 0 .58.5.58.54 0 .52-.41.59-.63.59h-.46v.66h.45c.65 0 .7.42.7.64 0 .32-.21.59-.65.59zM13.85 11.68c-.14 0-1.44-.08-1.44 1.82v.74c0 1.9 1.31 1.82 1.44 1.82.14 0 1.44.09 1.44-1.82v-.74c.01-1.91-1.3-1.82-1.44-1.82zm.6 2.67c0 .77-.21 1.03-.59 1.03s-.6-.26-.6-1.03v-.97c0-.75.22-1.01.59-1.01.38 0 .6.26.6 1.01v.97z" />
  </Svg>
);

export default SvgFilled;
