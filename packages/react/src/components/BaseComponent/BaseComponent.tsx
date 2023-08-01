import {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  ReactElement,
  useMemo,
} from "react";

import {
  CanonicalBaseComponentProps,
  ClassNames,
  ForwardedRefStyledComponentProps,
  RefType,
  StyledComponentProps,
} from "@/model/ClassNames";
import { ComponentType } from "@/model/ComponentType";
import { Styles } from "@/model/Styles";
import styled from "@/styled";
import { _StyledComponent } from "@/styles/styled/component.css";

interface InternalComponentTypeProps<
  Type extends ComponentType<CanonicalBaseComponentProps>
> {
  as: Type;
}

export interface InternalComponentStyleProps {
  _className?: ClassNames;
  _styles?: Styles;
}

export type ExtensibleBaseComponentProps<
  Type extends ComponentType<CanonicalBaseComponentProps>
> = ForwardedRefStyledComponentProps<_StyledComponent, ComponentProps<Type>>;

export type BaseComponentPropsInternal<
  Type extends ComponentType<CanonicalBaseComponentProps>
> = StyledComponentProps<
  _StyledComponent,
  InternalComponentTypeProps<Type> &
    InternalComponentStyleProps &
    ComponentProps<Type>
>;

interface BaseComponent {
  <Type extends ComponentType<CanonicalBaseComponentProps>>(
    props: BaseComponentPropsInternal<Type>
  ): ReactElement | null;
}

const BaseComponent = forwardRef(function Render<
  Type extends ComponentType<CanonicalBaseComponentProps>
>(
  { as, ...props }: BaseComponentPropsInternal<Type>,
  ref: ForwardedRef<RefType<ComponentProps<Type>>>
) {
  const Base = useMemo(
    () =>
      styled<Type, InternalComponentStyleProps>(
        as,
        ({ _className, _styles }) => ({
          className: _className,
          styles: _styles,
        })
      ),
    [as]
  );

  return <Base ref={ref} {...props} />;
});

export default BaseComponent;
