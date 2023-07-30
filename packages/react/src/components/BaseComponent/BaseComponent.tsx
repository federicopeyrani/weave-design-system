import { forwardRef, ReactElement, useMemo } from "react";

import { ClassNames } from "@/model/ClassNames";
import { ComponentType } from "@/model/ComponentType";
import { RestrictedComponentProps } from "@/model/RestrictedComponentProps";
import { Styles } from "@/model/Styles";
import styled from "@/styled";
import { _StyledComponent } from "@/styles/styled/component.css";
import { OutputProps } from "@/utils/styledComponentProducer";

interface InternalComponentTypeProps<Type extends ComponentType> {
  as: Type;
}

export interface InternalComponentStyleProps {
  _className?: ClassNames;
  _styles?: Styles;
}

export type ExtensibleBaseComponentProps<Type extends ComponentType> =
  OutputProps<_StyledComponent, RestrictedComponentProps<Type>>;

export type BaseComponentPropsInternal<Type extends ComponentType> =
  OutputProps<
    _StyledComponent,
    InternalComponentTypeProps<Type> &
      InternalComponentStyleProps &
      RestrictedComponentProps<Type>
  >;

interface BaseComponent {
  <Type extends ComponentType>(
    props: BaseComponentPropsInternal<Type>
  ): ReactElement | null;
}

const BaseComponent = forwardRef(function Render(
  { as, ...props }: BaseComponentPropsInternal<ComponentType>,
  ref: BaseComponentPropsInternal<ComponentType>["ref"]
) {
  const Base = useMemo(
    () =>
      styled(as, ({ _className, _styles }) => ({
        className: _className,
        styles: _styles,
      })),
    [as]
  );

  return <Base ref={ref} {...props} />;
}) as BaseComponent;

export default BaseComponent;
