import { ComponentClass, FunctionComponent, ReactHTML } from "react";

export type ComponentType<Props = unknown> =
  | keyof ReactHTML
  | FunctionComponent<Props>
  | ComponentClass<Props>;
