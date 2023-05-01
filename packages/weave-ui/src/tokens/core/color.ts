import {
  argbFromHex,
  hexFromArgb,
  TonalPalette,
} from "@material/material-color-utilities";

const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100] as const;

type Tones = (typeof tones)[number];

type HexColor = `#${string}`;

type Palette<Name extends string> = {
  [key in Tones as `${Name}${key}`]: HexColor;
};

export const tonalPalette = <Name extends string>(
  name: Name,
  sourceColor: HexColor
): Palette<Name> => {
  const argbSourceColor = argbFromHex(sourceColor);
  const palette = TonalPalette.fromInt(argbSourceColor);
  return Object.fromEntries(
    tones.map((tone) => [`${name}${tone}`, hexFromArgb(palette.tone(tone))])
  ) as Palette<Name>;
};
