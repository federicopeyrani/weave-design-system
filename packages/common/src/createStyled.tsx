import { ComponentProps } from "react";

import {
  CanonicalBaseComponentProps,
  CreateStyledArguments,
  StyledArguments,
} from "@/model";
import { ComponentType } from "@/model/ComponentType";
import {
  StyledComponent,
  styledComponentProducer,
} from "@/utils/styledComponentProducer";

export interface CreateStyled {
  <Arguments = unknown>(
    ...args: CreateStyledArguments<Arguments>
  ): Styled<Arguments>;
}

export interface Styled<Arguments = unknown> {
  <
    Type extends ComponentType<CanonicalBaseComponentProps>,
    InternalProps extends object = ComponentProps<Type>,
    ExternalProps extends InternalProps = InternalProps
  >(
    ...args: StyledArguments<Arguments, Type, InternalProps>
  ): StyledComponent<Arguments, ExternalProps>;
}

export const createStyled: CreateStyled =
  (...createStyledArgs) =>
  (...styledArgs) =>
    styledComponentProducer(...createStyledArgs, ...styledArgs);
