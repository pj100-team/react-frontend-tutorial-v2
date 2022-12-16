/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { FontColor, FontSize } from "../../view/helper/typographyHelper";

interface Props {
  fontColor?: FontColor;
}

const PlainText: React.FC<Props> = ({
  children,
  fontColor = FontColor.Headline,
}) => (
  <h1
    css={css`
      color: ${fontColor};
      font-size: ${FontSize.Medium};
      text-align: center;
      font-weight: nomal;
    `}
  >
    {children}
  </h1>
);

export default PlainText;