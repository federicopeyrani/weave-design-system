import Linear, { LinearProps } from "@/components/Layout/Linear/Linear";

export type ColumnProps = LinearProps;

const Column: React.FC<ColumnProps> = ({ children, ...props }) => (
  <Linear direction="column" {...props}>
    {children}
  </Linear>
);

export default Column;
