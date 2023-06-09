import { createVar, fallbackVar } from "@vanilla-extract/css";

import type { RGBColor, RGBColorFormat } from "@/model/Color";
import type { CSSVariable } from "@/model/CSSVariable";

export default function color(): {
  var: CSSVariable;
  color: RGBColor<CSSVariable>;
  opacityVar: CSSVariable;
};

export default function color<T extends RGBColorFormat | CSSVariable>(params: {
  color: T;
  opacity: CSSVariable;
}): { color: RGBColor<T> };

export default function color<T extends RGBColorFormat | CSSVariable>(params: {
  color: T;
  opacity?: number;
}): { color: RGBColor<T>; opacityVar: CSSVariable };

export default function color(
  {
    color: _color,
    opacity,
  }: {
    color?: RGBColorFormat | CSSVariable;
    opacity?: CSSVariable | number;
  } = {
    color: undefined,
    opacity: 1,
  }
): {
  var?: unknown;
  color?: unknown;
  opacityVar?: unknown;
} {
  // color()
  if (_color === undefined && typeof opacity === "number") {
    const valueVar = createVar("color");
    // invoke with color({ color: "var(--color)", opacity: 1 })
    const result = color({ color: valueVar, opacity });
    return { ...result, var: valueVar };
  }

  // color({ color: "var(--color)", opacity: "var(--opacity)" })
  if (typeof opacity !== "number") {
    return { color: `rgb(${_color} / ${opacity})` };
  }

  // color({ color: "var(--color)", opacity: 1 })
  const opacityVar = createVar("opacity");
  const opacityRef = fallbackVar(opacityVar, opacity.toString());
  const formattedColor = `rgb(${_color} / ${opacityRef})`;

  return { color: formattedColor, opacityVar: opacityVar };
}
