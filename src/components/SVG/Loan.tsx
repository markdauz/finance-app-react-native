import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={55}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h54.098v60H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.00536 0 0 .00483 -.017 0)" />
      </Pattern>
      <Image
        id="b"
        width={193}
        height={207}
        xlinkHref={
          "data:image/png;base64,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" as any
        }
      />
    </Defs>
  </Svg>
);

export default SvgComponent;