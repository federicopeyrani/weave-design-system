import {
  _StyledComponent,
  styledComponentProps,
} from "@/styles/styled/component.css";
import splitProps from "@/utils/splitProps";

const extractStyleProps = <Props extends object>(props: Props) => {
  const [pickedProps, otherProps] = splitProps(props, styledComponentProps);
  return [pickedProps as _StyledComponent, otherProps] as const;
};

export default extractStyleProps;
