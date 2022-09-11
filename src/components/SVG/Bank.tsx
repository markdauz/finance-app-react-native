import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 7.375a1.406 1.406 0 1 0 0-2.813 1.406 1.406 0 0 0 0 2.813ZM13.38.728a2.188 2.188 0 0 0-2.76 0L1.241 8.35c-1.14.93-.484 2.775.986 2.775h.398V19A3.433 3.433 0 0 0 .75 22.062v1.25a.937.937 0 0 0 .937.938h20.625a.937.937 0 0 0 .938-.938v-1.25A3.435 3.435 0 0 0 21.375 19v-7.875h.398c1.47 0 2.126-1.847.984-2.775L13.382.726l-.002.002Zm-1.575 1.455a.313.313 0 0 1 .394 0l8.69 7.067H3.11l8.696-7.069v.002ZM19.5 18.625h-1.875v-7.5H19.5v7.5Zm-3.75 0h-2.813v-7.5h2.813v7.5Zm-4.688 0H8.25v-7.5h2.813v7.5Zm8.751 1.875c.863 0 1.562.7 1.562 1.562v.313H2.625v-.313c0-.863.7-1.562 1.562-1.562h15.626ZM6.375 18.625H4.5v-7.5h1.875v7.5Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgComponent;
