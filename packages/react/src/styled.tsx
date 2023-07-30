import createStyled, { Styled } from "@/createStyled";
import { BaseStyledComponentProps } from "@/model/BaseStyledComponentProps";
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

export default styled;
