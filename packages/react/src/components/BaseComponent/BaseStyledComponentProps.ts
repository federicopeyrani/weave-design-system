import { ClassNames } from "@/model/ClassNames";
import { Styles } from "@/model/Styles";
import { _StyledComponent } from "@/styles/styled/component.css";

export interface BaseStyledComponentProps extends _StyledComponent {
  className?: ClassNames;
  styles?: Styles;
}
