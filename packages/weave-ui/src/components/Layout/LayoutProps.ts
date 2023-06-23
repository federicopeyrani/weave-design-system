import { ComponentProps } from "react";

import { StyledComponentProps } from "@/components/BaseComponent/BaseComponent";

export type LayoutProps = StyledComponentProps & ComponentProps<"div">;
