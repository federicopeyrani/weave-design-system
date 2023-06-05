import { useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";

import type { BaseComponentProps } from "@/components/BaseComponentProps";
import Component from "@/components/Component/Component";
import { schemas } from "@/tokens";
import getVariant from "@/utils/getVariant";
import pick from "@/utils/pick";
import type { RecipeVariantsNames, VariantSelector } from "@/utils/Types";

import { buttonClassName } from "./Button.css";

type ButtonVariantsSelector = VariantSelector<
  RecipeVariantsNames<typeof buttonClassName, "variant">
>;

type ButtonColorSelector = VariantSelector<
  RecipeVariantsNames<typeof buttonClassName, "color">
>;

type ButtonTypeSelector = VariantSelector<
  RecipeVariantsNames<typeof buttonClassName, "type">
>;

export type ButtonProps = BaseComponentProps &
  AriaButtonProps<"button"> &
  ButtonVariantsSelector &
  ButtonColorSelector &
  ButtonTypeSelector;

const Button: React.FC<ButtonProps> = ({
  children,
  filled,
  tonal,
  text,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useButton(props, ref);

  const variant = getVariant({ filled, tonal, text });
  const color = getVariant(pick(props, schemas.variants.color));
  const type = getVariant(pick(props, schemas.variants.type));

  const className = buttonClassName({
    variant: variant,
    state: isPressed ? "pressed" : undefined,
    color,
    type,
  });

  return (
    <Component
      as="button"
      _ref={ref}
      _className={className}
      {...props}
      {...buttonProps}
    >
      {children}
    </Component>
  );
};

export default Button;
