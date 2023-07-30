import { BaseStyledComponentProps } from "@/model/BaseStyledComponentProps";

const extractBaseProps = <Props extends BaseStyledComponentProps>({
  className,
  styles,
  style,
  ...props
}: Props) =>
  [{ className, styles, style } as BaseStyledComponentProps, props] as const;

export default extractBaseProps;
