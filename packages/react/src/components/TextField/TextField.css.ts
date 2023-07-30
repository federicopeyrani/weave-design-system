import { createTheme } from "@vanilla-extract/css";

import { baseInputFieldContract } from "@/components/BaseInputField/BaseInputField.css";

export const textFieldTheme = createTheme(baseInputFieldContract, {
  label: {
    margin: "0.5rem",
    clear: "0.5rem",
  },
});
