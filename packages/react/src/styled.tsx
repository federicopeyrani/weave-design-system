import { BaseStyledComponentProps, createStyled, Styled } from "common";

import styledComponentClassName, {
  _StyledComponent,
  styledComponentProps,
} from "@/styles/styled/component.css";

export type InternalStyledComponentProps = BaseStyledComponentProps &
  _StyledComponent;

const styled: Styled<_StyledComponent> = createStyled(
  styledComponentClassName,
  styledComponentProps
);

const A = styled("div", (props: { test?: number }) => "ciao");

<A ref={{ current: null as HTMLDivElement | null }} test={12} />;

export default styled;
