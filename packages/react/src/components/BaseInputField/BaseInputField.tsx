import { ReactNode } from "react";

import BaseComponent, {
  ExtensibleBaseComponentProps,
} from "@/components/BaseComponent/BaseComponent";

import {
  baseInputFieldClassName,
  containerClassName,
  fieldsetClassName,
  fieldsetLabelClassName,
  labelClassName,
} from "./BaseInputField.css";

export interface BaseInputFieldProps
  extends ExtensibleBaseComponentProps<"div"> {
  label?: ReactNode;
  isLabelFloating?: boolean;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

const BaseInputField: React.FC<BaseInputFieldProps> = ({
  label,
  isLabelFloating,
  labelProps,
  children,
  ...props
}) => (
  <BaseComponent as="div" _className={baseInputFieldClassName} {...props}>
    <div className={containerClassName}>
      {label && (
        <BaseComponent
          as="label"
          _className={labelClassName({
            state: isLabelFloating ? "floating" : undefined,
          })}
          {...labelProps}
        >
          {label}
        </BaseComponent>
      )}

      {children}
    </div>

    <fieldset aria-hidden className={fieldsetClassName}>
      {label && (
        <legend
          className={fieldsetLabelClassName({
            state: isLabelFloating ? "floating" : undefined,
          })}
        >
          <span>{label}</span>
        </legend>
      )}
    </fieldset>
  </BaseComponent>
);

export default BaseInputField;
