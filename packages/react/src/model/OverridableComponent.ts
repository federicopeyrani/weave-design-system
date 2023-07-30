import { ReactDOM, ReactElement } from "react";

import { ExtensibleBaseComponentProps } from "@/components/BaseComponent/BaseComponent";
import { ComponentType } from "@/model/ComponentType";

export type OverridableComponentProps<
  Default extends ComponentType,
  Type extends ComponentType = Default
> =
  | ({ as?: never } & ExtensibleBaseComponentProps<Default>)
  | ({ as: Type } & ExtensibleBaseComponentProps<Type>);

export interface OverridableComponent<Default extends keyof ReactDOM>
  extends React.FC {
  (props: OverridableComponentProps<Default>): ReactElement;

  <Type extends keyof ReactDOM>(
    props: OverridableComponentProps<Default, Type>
  ): ReactElement;
}
