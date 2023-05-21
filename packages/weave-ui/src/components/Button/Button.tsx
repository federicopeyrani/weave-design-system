import { useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";

import { BaseComponentProps } from "@/components/BaseComponentProps";
import Component from "@/components/Component/Component";
import getVariant from "@/utils/getVariant";
import { RecipeVariantsNames, VariantSelector } from "@/utils/type";

import { buttonClassName } from "./Button.css";

type ButtonVariantsSelector = VariantSelector<
  RecipeVariantsNames<typeof buttonClassName, "type">
>;

export type ButtonProps = BaseComponentProps &
  AriaButtonProps<"button"> &
  ButtonVariantsSelector;

const Button: React.FC<ButtonProps> = ({ children, primary, ...props }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);

  const type = getVariant({ primary });

  return (
    <Component
      as="button"
      _ref={ref}
      _className={buttonClassName({ type })}
      {...props}
      {...buttonProps}
    >
      {children}
    </Component>
  );
};

export default Button;
