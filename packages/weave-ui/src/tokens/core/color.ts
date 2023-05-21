import { argbFromHex, TonalPalette } from "@material/material-color-utilities";

import { HexColor, RGBColorFormat } from "@/utils/color";

const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100] as const;

type Tones = (typeof tones)[number];

type Palette<Name extends string> = {
  [key in Tones as `${Name}${key}`]: RGBColorFormat;
};

const extractColorChannels = (color: number): [number, number, number] => {
  const red = (color >> 16) & 0xff; // extract red channel
  const green = (color >> 8) & 0xff; // extract green channel
  const blue = color & 0xff; // extract blue channel
  return [red, green, blue];
};

const defineColor = (color: number): RGBColorFormat => {
  const [r, g, b] = extractColorChannels(color);
  return `${r} ${g} ${b}`;
};

export const tonalPalette = <Name extends string>(
  name: Name,
  sourceColor: HexColor
): Palette<Name> => {
  const argbSourceColor = argbFromHex(sourceColor);
  const palette = TonalPalette.fromInt(argbSourceColor);

  const entries = tones.map(
    (tone) => [`${name}${tone}`, defineColor(palette.tone(tone))] as const
  );

  return Object.fromEntries(entries) as Palette<Name>;
};
