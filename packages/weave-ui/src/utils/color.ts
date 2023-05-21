import { createVar, fallbackVar } from "@vanilla-extract/css";

import { CSSVariable } from "@/utils/CSSVariable";
import { FallbackCSSVariable } from "@/utils/FallbackCSSVariable";

export type HexColor = `#${string}`;

export type RGBColorFormat = `${number} ${number} ${number}`;

export type RGBColor<T extends RGBColorFormat | CSSVariable> =
  `rgb(${T} / ${FallbackCSSVariable})`;

export default function color(
  value?: undefined,
  opacity?: undefined
): { var: CSSVariable; color: RGBColor<CSSVariable>; opacity: CSSVariable };

export default function color<T extends RGBColorFormat | CSSVariable>(
  value: T,
  opacity: CSSVariable
): { color: RGBColor<T> };

export default function color<T extends RGBColorFormat | CSSVariable>(
  value: T,
  opacity?: number
): { color: RGBColor<T>; opacity: CSSVariable };

export default function color(
  value: RGBColorFormat | CSSVariable | undefined,
  opacity: CSSVariable | number = 1
): unknown {
  if (value === undefined && typeof opacity === "number") {
    const valueVar = createVar("color");
    return { ...color(valueVar, opacity), var: valueVar };
  }

  if (typeof opacity !== "number") {
    return { color: `rgb(${value} / ${opacity})` };
  }

  const opacityVar = createVar("opacity");
  const opacityRef = fallbackVar(opacityVar, opacity.toString());
  const formattedColor = `rgb(${value} / ${opacityRef})`;

  return { color: formattedColor, opacity: opacityVar };
}
