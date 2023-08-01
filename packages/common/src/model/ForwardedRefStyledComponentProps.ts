import { PropsWithoutRef, RefAttributes } from "react";

import { StyledComponentProps } from "@/model/StyledComponentProps";
import { RefType } from "@/utils";

export type ForwardedRefStyledComponentProps<Arguments, Props> =
  PropsWithoutRef<StyledComponentProps<Arguments, Props>> &
    RefAttributes<RefType<Props>>;
