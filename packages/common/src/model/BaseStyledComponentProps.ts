import { CSSProperties } from "react";

import { ClassNames } from "@/model/ClassNames";
import { Styles } from "@/model/Styles";

export interface BaseStyledComponentProps {
  className?: ClassNames;
  styles?: Styles;
  style?: CSSProperties;
}
