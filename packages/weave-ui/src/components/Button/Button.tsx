import { RecipeVariants } from "@vanilla-extract/recipes";
import { useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";

import Component from "@/components/Component/Component";

import { button } from "./Button.css";

export type ButtonProps = AriaButtonProps<"button">;

const Button: React.FC<
  ButtonProps & {
    _type: Exclude<RecipeVariants<typeof button>, undefined>["type"];
  }
> = ({ _type, children, ...props }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <Component
      as="button"
      elementRef={ref}
      baseClassName={button({ type: _type })}
      {...props}
      {...buttonProps}
    >
      {children}
    </Component>
  );
};

export default Button;
