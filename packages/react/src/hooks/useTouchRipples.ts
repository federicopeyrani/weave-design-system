import { useCallback, useState } from "react";

import { TouchRipplePosition } from "@/components/TouchRipple/TouchRipple";

type TouchRipple = TouchRipplePosition & {
  key: string;
};

export type TouchRippleTriggerProps = TouchRipplePosition & {
  duration?: number;
};

const generateIdentifier = () => Math.random().toString(36).substring(2, 8);

const useTouchRipples = () => {
  const [ripples, setRipples] = useState<TouchRipple[]>([]);

  const triggerRipple = useCallback(
    ({ x, y, duration = 1000 }: TouchRippleTriggerProps) => {
      const newRipple = { key: generateIdentifier(), x, y };

      setRipples((prevRipples) => [...prevRipples, newRipple]);
      setTimeout(() => {
        setRipples((ripples) =>
          ripples.filter((ripple) => ripple !== newRipple)
        );
      }, duration);
    },
    []
  );

  return { ripples, triggerRipple };
};

export default useTouchRipples;
