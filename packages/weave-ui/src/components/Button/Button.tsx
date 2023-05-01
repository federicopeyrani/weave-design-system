import { ComponentProps } from "react";

import Component from "@/components/Component/Component";

import { button } from "./Button.css";

export type ButtonProps = ComponentProps<"button">;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Component as="button" baseClassName={button({ type: "primary" })} {...props}>
    {children}
  </Component>
);

export default Button;
