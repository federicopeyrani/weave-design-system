import type { ComponentProperties } from "@/components/Component/Component.css";
import type { ClassNames } from "@/model/ClassNames";
import type { Styles } from "@/model/Styles";

export type BaseComponentProps = ComponentProperties & {
  className?: ClassNames;
  styles?: Styles;
};
