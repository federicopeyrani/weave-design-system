import "./global.css";

export * from "./components";

import { buttonTokens } from "@/components/index.css";
import { tokens } from "@/tokens/index.css";

export const theme = { ...tokens, comp: { ...buttonTokens } };
