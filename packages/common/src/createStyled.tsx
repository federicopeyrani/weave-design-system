import { ComponentType } from "@/model/ComponentType";
import { RestrictedComponentProps } from "@/model/RestrictedComponentProps";
import { StyleArgument } from "@/model/StyleArgument";
import styledComponentProducer, {
  StyledComponent,
} from "@/utils/styledComponentProducer";

export interface CreateStyled {
  <Arguments>(
    producer: (props: Arguments) => string,
    styleKeys: readonly (keyof Arguments)[]
  ): Styled<Arguments>;
}

export interface Styled<Arguments> {
  <Type extends ComponentType, Props = RestrictedComponentProps<Type>>(
    as: Type,
    styleArgument: StyleArgument<Arguments, Props>
  ): StyledComponent<Arguments, Props>;
}

const createStyled: CreateStyled =
  (producer, styleKeys) => (as, styleArgument) =>
    styledComponentProducer(producer, styleKeys, as, styleArgument);

export default createStyled;
