import { duration } from "@/tokens/app/motion";
import { core } from "@/tokens/core/index.css";
import createTokens from "@/utils/createTokens";

export const [appCommon, appCommonValues] = createTokens({
  shape: {
    rounded: {
      startStart: core.grid.small3,
      startEnd: core.grid.small3,
      endEnd: core.grid.small3,
      endStart: core.grid.small3,
    },
  },
  type: {
    bodyLarge: {
      size: core.type.scale0, // 1rem
      weight: core.type.weightRegular,
      font: core.type.fontPlain,
    },
    bodyMedium: {
      size: core.type["scale-1"], // ?rem
      weight: core.type.weightRegular,
      font: core.type.fontPlain,
    },
    bodySmall: {
      size: core.type["scale-2"], // 0.75rem
      weight: core.type.weightRegular,
      font: core.type.fontPlain,
    },
    displayLarge: {
      size: core.type["scale11"], // 3.562rem
      weight: core.type.weightRegular,
      font: core.type.fontBrand,
    },
    displayMedium: {
      size: core.type["scale9"], // 2.812rem
      weight: core.type.weightRegular,
      font: core.type.fontBrand,
    },
    displaySmall: {
      size: core.type["scale7"], // 2.25rem
      weight: core.type.weightRegular,
      font: core.type.fontBrand,
    },
    headlineLarge: {
      size: core.type["scale6"], // 2rem
      weight: core.type.weightRegular,
      font: core.type.fontBrand,
    },
    headlineMedium: {
      size: core.type["scale5"], // 1.75rem
      weight: core.type.weightRegular,
      font: core.type.fontBrand,
    },
    headlineSmall: {
      size: core.type["scale4"], // 1.5rem
      weight: core.type.weightRegular,
      font: core.type.fontBrand,
    },
    labelLarge: {
      size: core.type["scale-1"], // 0.875rem
      weight: core.type.weightMedium,
      font: core.type.fontPlain,
    },
    labelMedium: {
      size: core.type["scale-2"], // 0.75rem
      weight: core.type.weightMedium,
      font: core.type.fontPlain,
    },
    labelSmall: {
      size: core.type["scale-3"], // 0.688rem
      weight: core.type.weightMedium,
      font: core.type.fontPlain,
    },
    titleLarge: {
      size: core.type["scale3"], // 1.375rem
      weight: core.type.weightRegular,
      font: core.type.fontBrand,
    },
    titleMedium: {
      size: core.type["scale2"], // 1.25rem
      weight: core.type.weightRegular,
      font: core.type.fontPlain,
    },
    titleSmall: {
      size: core.type["scale-1"], // 0.875rem
      weight: core.type.weightRegular,
      font: core.type.fontPlain,
    },
  },
  motion: duration(
    "duration",
    ["Short", "Medium", "Long", "ExtraLong"] as const,
    ["1", "2", "3", "4"] as const,
    50
  ),
});
