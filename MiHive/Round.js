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
    <Path d="m14.09 7.51 1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.51-.48-.86-.48h-2.45a.99.99 0 0 0-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.17.3.5.48.85.48h2.45c.36 0 .69-.18.87-.49zM9.91 9.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.46c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2a.99.99 0 0 0-.86-.49h-2.46a.99.99 0 0 0-.86.49zM17.01 11.51h2.45c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.51-.49-.86-.49h-2.45a.99.99 0 0 0-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.19.31.51.49.86.49zM19.47 12.51h-2.46a.99.99 0 0 0-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.46c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.51-.49-.86-.49zM7.84 11.03l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.5-.49-.85-.49H4.53c-.35 0-.68.19-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.45c.36-.01.68-.19.86-.49zM6.99 12.51H4.53a.99.99 0 0 0-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.46c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.19-.3-.51-.49-.86-.49zM9.91 16.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.46c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.51-.49-.86-.49h-2.46a.99.99 0 0 0-.86.49z" />
  </Svg>
);

export default SvgRound;
