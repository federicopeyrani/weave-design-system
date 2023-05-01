import Button, { ButtonProps } from "./Button";

const PrimaryButton: React.FC<ButtonProps> = (props) => (
  <Button _type="primary" {...props} />
);

export default PrimaryButton;
