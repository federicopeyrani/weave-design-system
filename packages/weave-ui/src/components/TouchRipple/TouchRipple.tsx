import React from "react";

import { BaseComponentProps } from "@/components/BaseComponentProps";
import Component from "@/components/Component/Component";
import GrainyFilter from "@/components/GrainyFilter/GrainyFilter";
import {
  noiseClassName,
  touchRipple,
  touchRippleClassName,
} from "@/components/TouchRipple/TouchRipple.css";

export type TouchRipplePosition = {
  x: string;
  y: string;
};

export type TouchRippleProps = BaseComponentProps &
  Partial<TouchRipplePosition> & {
    disableAnimate?: boolean;
  };

const TouchRipple: React.FC<TouchRippleProps> = ({
  disableAnimate = false,
  x = "0",
  y = "0",
  ...props
}) => (
  <Component
    as="div"
    _className={touchRippleClassName({
      state: disableAnimate ? undefined : "active",
    })}
    _styles={{ [touchRipple.x]: x, [touchRipple.y]: y }}
    {...props}
  >
    <GrainyFilter className={noiseClassName} size={800} />
  </Component>
);

export default TouchRipple;
