import BaseComponent from "@/components/BaseComponent/BaseComponent";
import { LayoutProps } from "@/components/Layout/LayoutProps";
import {
  LinearClassName,
  linearClassName,
} from "@/components/Layout/Linear/Linear.css";
import schemas, { DimensionValues } from "@/styles/schemas";
import { StyledFlex, styledFlexClassName } from "@/styles/styled";

export type LinearPropsInternal = LayoutProps &
  LinearClassName &
  StyledFlex & {
    spacing?: DimensionValues;
  };

export type LinearProps = Omit<LinearPropsInternal, "direction">;

const Linear: React.FC<LinearPropsInternal> = ({
  children,
  direction,
  align,
  justify,
  wrap,
  spacing,
  ...props
}) => {
  const className = linearClassName({
    direction: typeof direction === "string" ? direction : undefined,
    align: typeof align === "string" ? align : undefined,
    justify: typeof justify === "string" ? justify : undefined,
    wrap: typeof wrap === "string" ? wrap : undefined,
  });

  const flexClassName = styledFlexClassName({
    direction,
    align,
    justify,
    wrap,
  });

  const dimensionClassName = schemas.properties.dimension(spacing);

  return (
    <BaseComponent
      as="div"
      _className={[className, flexClassName, dimensionClassName]}
      {...props}
    >
      {children}
    </BaseComponent>
  );
};

export default Linear;
