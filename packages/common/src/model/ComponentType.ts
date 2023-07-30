import { JSXElementConstructor } from "react";

export type ComponentType<Props = any> =
  | keyof JSX.IntrinsicElements
  | JSXElementConstructor<Props>;
