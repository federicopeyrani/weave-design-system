import { ReactDOM, ReactElement } from "react";

import { StyledComponentProps } from "@/components/BaseComponent/BaseComponent";

export type OverridableComponentProps<
  Default extends keyof ReactDOM,
  Type extends keyof ReactDOM = Default
> = StyledComponentProps &
  (
    | ({ as?: never } & JSX.IntrinsicElements[Default])
    | ({ as: Type } & JSX.IntrinsicElements[Type])
  );

export interface OverridableComponent<Default extends keyof ReactDOM>
  extends React.FC {
  (props: OverridableComponentProps<Default>): ReactElement;

  <Type extends keyof ReactDOM>(
    props: OverridableComponentProps<Default, Type>
  ): ReactElement;
}
