import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={50}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2 .11c-1.104 0-2 .906-2 2.024v27.732c0 1.118.896 2.025 2 2.025h46c1.104 0 2-.907 2-2.025V2.134c0-1.118-.896-2.025-2-2.025H2Zm27.863 9.47c1.216 0 2.192.273 2.814.526l-.425 2.706-.282-.144a5.405 5.405 0 0 0-2.35-.48c-1.229 0-1.797.555-1.797 1.074-.007.585.664.971 1.761 1.549 1.811.89 2.648 1.971 2.636 3.392-.024 2.592-2.166 4.267-5.465 4.267-1.408-.016-2.764-.317-3.497-.666l.44-2.796.405.2c1.031.465 1.698.654 2.955.654.902 0 1.87-.382 1.878-1.22.006-.546-.405-.936-1.627-1.548-1.19-.597-2.769-1.598-2.751-3.392.018-2.427 2.203-4.121 5.305-4.121Zm-25.441.398h5.067c.682.026 1.233.248 1.423.998l1.093 5.706v.003l.328 1.71 3.076-8.417h3.329l-4.947 12.32-3.325.003-2.647-9.942c1.575.845 2.916 1.822 3.692 3.167a8.943 8.943 0 0 0-.802-1.38c-.393-.55-1.242-1.262-1.596-1.565-1.237-1.055-2.916-1.907-4.73-2.358l.039-.245Zm15.639.014h3.255l-2.036 12.3h-3.255l2.036-12.3Zm18.383 0h2.465l2.582 12.3h-2.96s-.293-1.412-.389-1.843l-4.084-.005c-.124.333-.672 1.849-.672 1.849h-3.349l4.736-11.28c.336-.8.907-1.021 1.67-1.021Zm.242 3.308c-.16.458-.439 1.197-.42 1.164 0 0-1.002 2.705-1.264 3.407l2.632-.002-.734-3.518-.214-1.05Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgComponent;
