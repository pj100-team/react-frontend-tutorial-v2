/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { FontColor } from "../../view/helper/typographyHelper";

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
      font-weight: normal;
      font-size: 16;
      text-align: center;
    `}
  >
    {children}
  </h1>
);

export default PlainText;
