import Component from "@/components/Component/Component";
import { LayoutProps } from "@/components/Layout/LayoutProps";
import {
  linearClassName,
  LinearProperties,
  linearProperties,
} from "@/components/Layout/Linear/Linear.css";

export type LinearPropsInternal = LayoutProps & LinearProperties;

const Linear: React.FC<LinearPropsInternal> = ({
  children,
  direction,
  align,
  justify,
  wrap,
  ...props
}) => {
  const propertiesClassName = linearProperties({
    direction,
    align,
    justify,
    wrap,
  });

  return (
    <Component
      as="div"
      _className={[linearClassName, propertiesClassName]}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Linear;
