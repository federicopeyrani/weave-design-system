import { globalStyle, style } from "@vanilla-extract/css";

export const controlsContainer = style({
  display: "grid",
  gridTemplateAreas: `
  "story controls"
  "source controls"
  `,
  alignItems: "center",
  justifyItems: "center",
});

globalStyle(`${controlsContainer} > :nth-child(1)`, {
  gridArea: "story",
});

globalStyle(`${controlsContainer} > :nth-child(2)`, {
  gridArea: "source",
});

globalStyle(`${controlsContainer} > :nth-child(3)`, {
  gridArea: "controls",
});

globalStyle(`${controlsContainer} .docblock-source`, {
  margin: 0,
});

globalStyle(`${controlsContainer} .docblock-source button`, {
  display: "none",
});

globalStyle(`${controlsContainer} table.docblock-argstable`, {
  margin: 0,
});

globalStyle(`${controlsContainer} table.docblock-argstable thead`, {
  display: "none",
});

globalStyle(
  `${controlsContainer} table.docblock-argstable td:where(:nth-child(2), :nth-child(3))`,
  {
    display: "none",
  }
);
