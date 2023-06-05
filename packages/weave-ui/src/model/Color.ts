import type { CSSVariable } from "@/model/CSSVariable";

export type HexColorChannel = `${number | string}${number | string}`;

export type HexColorFormat =
  `#${HexColorChannel}${HexColorChannel}${HexColorChannel}`;

export type RGBColorFormat = `${number} ${number} ${number}`;

export type RGBColor<
  Value extends RGBColorFormat | CSSVariable = RGBColorFormat,
  Fallback extends number | CSSVariable = number
> = `rgb(${Value} / ${Fallback})`;
