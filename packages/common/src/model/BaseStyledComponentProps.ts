import { CSSProperties } from "react";

import { ClassNames } from "./ClassNames";
import { Styles } from "./Styles";

export interface BaseStyledComponentProps {
  className?: ClassNames;
  styles?: Styles;
  style?: CSSProperties;
}
