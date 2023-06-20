import { LayoutProps } from "@/components/Layout/LayoutProps";
import Linear from "@/components/Layout/Linear/Linear";
import { LinearProps } from "@/components/Layout/Linear/LinearProps";

export type RowProps = LayoutProps & LinearProps;

const Row: React.FC<RowProps> = ({ children, ...props }) => (
  <Linear direction="row" {...props}>
    {children}
  </Linear>
);

export default Row;
