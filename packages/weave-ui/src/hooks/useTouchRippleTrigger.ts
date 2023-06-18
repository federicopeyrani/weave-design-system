import { EventHandler, PointerEvent, useCallback } from "react";

import { TouchRippleTriggerProps } from "@/hooks/useTouchRipples";

export type TouchRippleTargetProps<T> = {
  disabled?: boolean;
  onPointerDown?: EventHandler<PointerEvent<T>>;
};

const useTouchRippleTrigger = <T>(
  { disabled, onPointerDown }: TouchRippleTargetProps<T>,
  triggerRipple: (props: TouchRippleTriggerProps) => void
) => {
  const handlePointerDown = useCallback(
    (event: PointerEvent<T>) => {
      if (
        disabled ||
        !("offsetLeft" in event.target) ||
        !("offsetTop" in event.target) ||
        typeof event.target.offsetLeft !== "number" ||
        typeof event.target.offsetTop !== "number"
      ) {
        return;
      }

      onPointerDown?.(event);
      triggerRipple({
        x: `${event.clientX - event.target.offsetLeft}px`,
        y: `${event.clientY - event.target.offsetTop}px`,
      });
    },
    [onPointerDown, triggerRipple]
  );

  return {
    triggerProps: {
      onPointerDown: handlePointerDown,
    },
  };
};

export default useTouchRippleTrigger;
