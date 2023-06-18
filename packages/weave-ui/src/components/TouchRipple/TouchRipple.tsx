import React from "react";

import { BaseComponentProps } from "@/components/BaseComponentProps";
import Component from "@/components/Component/Component";
import GrainyFilter, {
  GrainyFilterProps,
} from "@/components/GrainyFilter/GrainyFilter";
import {
  noiseClassName,
  touchRipple,
  touchRippleBackgroundClassName,
  touchRippleClassName,
} from "@/components/TouchRipple/TouchRipple.css";

export type TouchRipplePosition = {
  x: string;
  y: string;
};

export type TouchRippleProps = BaseComponentProps &
  Partial<TouchRipplePosition> & {
    size?: number;
    disableAnimate?: boolean;
    grainyFilterProps?: GrainyFilterProps;
  };

const TouchRipple: React.FC<TouchRippleProps> = ({
  disableAnimate = false,
  x = "0",
  y = "0",
  size = 200,
  grainyFilterProps: {
    size: grainyFilterSize = size,
    ...grainyFilterProps
  } = {},
  ...props
}) => (
  <Component
    as="div"
    _className={touchRippleClassName}
    _styles={{
      [touchRipple.x]: x,
      [touchRipple.y]: y,
    }}
    {...props}
  >
    <div
      className={touchRippleBackgroundClassName({
        state: disableAnimate ? undefined : "active",
      })}
    >
      <GrainyFilter
        className={noiseClassName}
        size={grainyFilterSize}
        {...grainyFilterProps}
      />
    </div>
  </Component>
);

export default TouchRipple;
