import { LayoutProps } from "@/components/Layout/LayoutProps";
import Linear from "@/components/Layout/Linear/Linear";
import { LinearProps } from "@/components/Layout/Linear/LinearProps";

export type ColumnProps = LayoutProps & LinearProps;

const Column: React.FC<ColumnProps> = ({ children, ...props }) => (
  <Linear direction="column" {...props}>
    {children}
  </Linear>
);

export default Column;
