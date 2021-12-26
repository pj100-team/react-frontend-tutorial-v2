/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { BackgroundColor } from "../../view/helper/layoutHelper";

interface Props {
  color?: BackgroundColor;
}

export const PageWrapper: React.FC<Props> = ({
  children,
  color = BackgroundColor.Background,
}) => (
  <div
    css={css`
      background-color: ${color};
      height: 100%;
      min-height: 100vh;
      padding: 30px;
    `}
  >
    {children}
  </div>
);

export default PageWrapper;
