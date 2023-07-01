import Linear, { LinearProps } from "@/components/Layout/Linear/Linear";

export type RowProps = LinearProps;

const Row: React.FC<RowProps> = ({ children, ...props }) => (
  <Linear direction="row" {...props}>
    {children}
  </Linear>
);

export default Row;
