export type CSSVariableName = `--${string}`;

export type CSSVariableFunction<
  Fallback extends CSSVariableValue | undefined = undefined
> = Fallback extends undefined
  ? `var(${CSSVariableName})`
  : `var(${CSSVariableName}, ${Fallback})`;

export type CSSVariableValue = CSSVariableFunction | string | number;

export type CSSVariable =
  | CSSVariableFunction
  | CSSVariableFunction<CSSVariableValue>;
