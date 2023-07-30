import { ComponentProps } from "react";

import { BaseStyledComponentProps } from "@/model/BaseStyledComponentProps";
import { ComponentType } from "@/model/ComponentType";

export type RestrictedComponentProps<Type extends ComponentType> = Omit<
  ComponentProps<Type>,
  keyof BaseStyledComponentProps
>;
