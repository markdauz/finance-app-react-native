import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={17}
    height={5}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.333 4.167a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167Zm-6.25 0a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167Zm12.5 0a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167Z"
      fill="#000"
    />
  </Svg>
);

export default SvgComponent;
