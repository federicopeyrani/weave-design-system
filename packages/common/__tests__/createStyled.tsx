// noinspection BadExpressionStatementJS

import { createStyled } from "@/createStyled";

const styled = createStyled(() => "unknown", []);

const BasicStyledDiv = styled("div");

<BasicStyledDiv />;

<BasicStyledDiv
  // @ts-expect-error - should not allow unknown props
  test={12}
/>;

<BasicStyledDiv ref={{ current: null as HTMLDivElement | null }} />;

<BasicStyledDiv
  // @ts-expect-error - should not allow wrong ref type
  ref={{ current: null as HTMLButtonElement | null }}
/>;

const DynamicStyledDiv = styled("div", (_: { test?: number }) => "unknown");

<DynamicStyledDiv />;

<DynamicStyledDiv test={12} />;

<DynamicStyledDiv
  // @ts-expect-error - should not allow wrong ref type
  test="12"
/>;

<DynamicStyledDiv ref={{ current: null as HTMLDivElement | null }} />;

<DynamicStyledDiv
  // @ts-expect-error - should not allow wrong ref type
  ref={{ current: null as HTMLButtonElement | null }}
/>;

styled("button", ({ onClick }) => ({}));
