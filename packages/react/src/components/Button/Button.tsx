import { useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";

import BaseComponent from "@/components/BaseComponent/BaseComponent";
import { BaseStyledComponentProps } from "@/components/BaseComponent/BaseStyledComponentProps";
import TouchRipple from "@/components/TouchRipple/TouchRipple";
import useTouchRipples from "@/hooks/useTouchRipples";
import useTouchRippleTrigger from "@/hooks/useTouchRippleTrigger";
import schemas from "@/styles/schemas";
import getVariant from "@/utils/getVariant";
import splitProps from "@/utils/splitProps";
import type { RecipeVariantsNames, VariantSelector } from "@/utils/Types";

import { buttonClassName, touchRippleClassName } from "./Button.css";

type ButtonVariantsSelector = VariantSelector<
  RecipeVariantsNames<typeof buttonClassName, "variant">
>;

type ButtonColorSelector = VariantSelector<
  RecipeVariantsNames<typeof buttonClassName, "color">
>;

type ButtonTypeSelector = VariantSelector<
  RecipeVariantsNames<typeof buttonClassName, "type">
>;

export type ButtonProps = BaseStyledComponentProps &
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
  const { buttonProps } = useButton(props, ref);

  const { triggerRipple, ripples } = useTouchRipples();
  const { triggerProps } = useTouchRippleTrigger(buttonProps, triggerRipple);

  const [colorProps, filteredColorProps] = splitProps(
    props,
    schemas.variants.color
  );
  const [typeProps, filteredProps] = splitProps(
    filteredColorProps,
    schemas.variants.type
  );

  const className = buttonClassName({
    variant: getVariant({ filled, tonal, text }),
    color: getVariant(colorProps),
    type: getVariant(typeProps),
  });

  return (
    <BaseComponent
      as="button"
      ref={ref}
      _className={className}
      {...filteredProps}
      {...buttonProps}
      {...triggerProps}
    >
      {ripples.map(({ key, ...ripple }) => (
        <TouchRipple key={key} className={touchRippleClassName} {...ripple} />
      ))}
      {children}
    </BaseComponent>
  );
};

export default Button;
