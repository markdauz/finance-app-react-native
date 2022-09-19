import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={26}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.5 1.875A1.875 1.875 0 0 1 2.375 0h21.25a1.875 1.875 0 1 1 0 3.75H2.375A1.875 1.875 0 0 1 .5 1.875Zm5 7.5A1.875 1.875 0 0 1 7.375 7.5h11.25a1.875 1.875 0 1 1 0 3.75H7.375A1.875 1.875 0 0 1 5.5 9.375ZM11.125 15a1.875 1.875 0 1 0 0 3.75h3.75a1.875 1.875 0 1 0 0-3.75h-3.75Z"
      fill="#000"
    />
  </Svg>
);

export default SvgComponent;
