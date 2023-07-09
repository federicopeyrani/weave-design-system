import { forwardRef, ReactDOM } from "react";

import BaseComponent from "@/components/BaseComponent/BaseComponent";
import { typeClassName } from "@/components/Type/Type.css";
import {
  OverridableComponent,
  OverridableComponentProps,
} from "@/model/OverridableComponent";
import schemas from "@/styles/schemas";
import getVariant from "@/utils/getVariant";
import splitProps from "@/utils/splitProps";
import { RecipeVariantsNames, VariantSelector } from "@/utils/Types";

type TypeColorSelector = VariantSelector<
  RecipeVariantsNames<typeof typeClassName, "color">
>;

type TypeTypeSelector = VariantSelector<
  RecipeVariantsNames<typeof typeClassName, "type">
>;

export type TypeProps<Type extends keyof ReactDOM = "span"> =
  OverridableComponentProps<"span", Type> &
    TypeTypeSelector &
    TypeColorSelector;

type Type = OverridableComponent<"span">;

const Type = forwardRef<HTMLSpanElement, TypeProps>(function TypeRender(
  props,
  ref
) {
  const { as = "span", ...rest } = props;

  const [colorProps, filteredColorProps] = splitProps(
    rest,
    schemas.variants.color
  );
  const [typeProps, filteredProps] = splitProps(
    filteredColorProps,
    schemas.variants.type
  );

  const color = getVariant(colorProps);
  const type = getVariant(typeProps);

  const className = typeClassName({ color, type });

  return (
    <BaseComponent
      as={as}
      ref={ref}
      _className={className}
      {...filteredProps}
    />
  );
}) as Type;

export default Type;
