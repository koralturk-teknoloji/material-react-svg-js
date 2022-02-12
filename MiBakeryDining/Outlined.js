import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgOutlined = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M20.5 10.94c.13-.32.1-.23.15-.39.3-1.21-.34-2.47-1.5-2.93l-2.01-.8c-.46-.18-.95-.21-1.41-.12-.11-.33-.29-.63-.52-.89-.48-.52-1.15-.81-1.85-.81h-2.71c-.71 0-1.38.29-1.85.81-.24.26-.42.56-.53.88-.46-.09-.95-.06-1.41.12l-2.01.8c-1.16.46-1.8 1.72-1.5 2.93l.15.38C1.1 15.55 1 15.55 1 16.38c0 .91.46 1.74 1.24 2.22 1.42.88 2.49.14 4-.61h11.53c1.52.76 1.86 1.01 2.63 1.01 1 0 2.61-.77 2.61-2.61-.01-.85-.13-.88-2.51-5.45zm-.38 5.99-1.68-.84 1.08-2.7 1.41 2.71c.28.53-.29 1.09-.81.83zm-5.03-.94.62-6.9c.03-.33.37-.54.68-.42l2.01.8c.22.09.34.31.31.54l-2.4 5.98h-1.22zm-7.41 0-2.4-5.98c-.03-.23.09-.45.31-.54l2.01-.8c.31-.12.65.08.68.42l.62 6.9H7.68zm-4.61.11 1.41-2.72 1.08 2.71-1.68.84c-.52.26-1.09-.3-.81-.83zm7.08-8.56a.5.5 0 0 1 .5-.54h2.71a.5.5 0 0 1 .5.54l-.77 8.45h-2.17l-.77-8.45z" />
  </Svg>
);

export default SvgOutlined;
