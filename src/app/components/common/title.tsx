/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { FontColor, FontSize } from "../../view/helper/typographyHelper";

interface Props {
  fontColor?: FontColor;
}

const Title: React.FC<Props> = ({
  children,
  fontColor = FontColor.Headline,
}) => (
  <h1
    css={css`
      color: ${fontColor};
      font-size: ${FontSize.Large};
      text-align: center;
    `}
  >
    {children}
  </h1>
);

export default Title;
