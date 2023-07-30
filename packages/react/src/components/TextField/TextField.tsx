import { useRef } from "react";
import { AriaTextFieldProps, useTextField } from "react-aria";

import BaseInputField from "@/components/BaseInputField/BaseInputField";
import { textFieldTheme } from "@/components/TextField/TextField.css";
import styled, { InternalStyledComponentProps } from "@/styled";
import extractBaseProps from "@/utils/extractBaseProps";
import extractStyleProps from "@/utils/extractStyleProps";

export interface TextFieldProps
  extends InternalStyledComponentProps,
    AriaTextFieldProps {}

const StyledBaseInputField = styled(BaseInputField, {
  className: textFieldTheme,
});

const TextField: React.FC<TextFieldProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);
  const { inputProps, labelProps } = useTextField(
    { inputElementType: "input", ...props },
    ref
  );

  const [baseProps] = extractBaseProps(props);
  const [styleProps] = extractStyleProps(props);

  return (
    <StyledBaseInputField
      label={props.label}
      isLabelFloating
      labelProps={labelProps}
      {...baseProps}
      {...styleProps}
    >
      <input ref={ref} {...inputProps} />
    </StyledBaseInputField>
  );
};

export default TextField;
