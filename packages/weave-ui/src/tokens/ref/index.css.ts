import { cx } from "classix";

import { refCommon, refCommonThemeClassName } from "./common.css";
import { refDarkThemeClassName as _refDarkThemeClassName } from "./dark.css";
import {
  refLight,
  refLightThemeClassName as _refLightThemeClassName,
} from "./light.css";

export const ref = { ...refCommon, ...refLight };

export const refLightThemeClassName = cx(
  refCommonThemeClassName,
  _refLightThemeClassName
);

export const refDarkThemeClassName = cx(
  refCommonThemeClassName,
  _refDarkThemeClassName
);
