import { duration } from "@/tokens/app/motion";
import { ref } from "@/tokens/ref/index.css";
import createTokens from "@/utils/createTokens";

export const [appCommon, appCommonValues] = createTokens({
  shape: {
    rounded: {
      startStart: ref.grid.small3,
      startEnd: ref.grid.small3,
      endEnd: ref.grid.small3,
      endStart: ref.grid.small3,
    },
  },
  type: {
    bodyLarge: {
      size: ref.type.scale0, // 1rem
      weight: ref.type.weightRegular,
      font: ref.type.fontPlain,
    },
    bodyMedium: {
      size: ref.type["scale-1"], // ?rem
      weight: ref.type.weightRegular,
      font: ref.type.fontPlain,
    },
    bodySmall: {
      size: ref.type["scale-2"], // 0.75rem
      weight: ref.type.weightRegular,
      font: ref.type.fontPlain,
    },
    displayLarge: {
      size: ref.type["scale11"], // 3.562rem
      weight: ref.type.weightRegular,
      font: ref.type.fontBrand,
    },
    displayMedium: {
      size: ref.type["scale9"], // 2.812rem
      weight: ref.type.weightRegular,
      font: ref.type.fontBrand,
    },
    displaySmall: {
      size: ref.type["scale7"], // 2.25rem
      weight: ref.type.weightRegular,
      font: ref.type.fontBrand,
    },
    headlineLarge: {
      size: ref.type["scale6"], // 2rem
      weight: ref.type.weightRegular,
      font: ref.type.fontBrand,
    },
    headlineMedium: {
      size: ref.type["scale5"], // 1.75rem
      weight: ref.type.weightRegular,
      font: ref.type.fontBrand,
    },
    headlineSmall: {
      size: ref.type["scale4"], // 1.5rem
      weight: ref.type.weightRegular,
      font: ref.type.fontBrand,
    },
    labelLarge: {
      size: ref.type["scale-1"], // 0.875rem
      weight: ref.type.weightMedium,
      font: ref.type.fontPlain,
    },
    labelMedium: {
      size: ref.type["scale-2"], // 0.75rem
      weight: ref.type.weightMedium,
      font: ref.type.fontPlain,
    },
    labelSmall: {
      size: ref.type["scale-3"], // 0.688rem
      weight: ref.type.weightMedium,
      font: ref.type.fontPlain,
    },
    titleLarge: {
      size: ref.type["scale3"], // 1.375rem
      weight: ref.type.weightRegular,
      font: ref.type.fontBrand,
    },
    titleMedium: {
      size: ref.type["scale2"], // 1.25rem
      weight: ref.type.weightRegular,
      font: ref.type.fontPlain,
    },
    titleSmall: {
      size: ref.type["scale-1"], // 0.875rem
      weight: ref.type.weightRegular,
      font: ref.type.fontPlain,
    },
  },
  motion: duration(
    "duration",
    ["Short", "Medium", "Long", "ExtraLong"] as const,
    ["1", "2", "3", "4"] as const,
    50
  ),
});
