/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { FontColor, FontSize } from "../../view/helper/typographyHelper";

interface Props {
  fontColor?: FontColor;
}

const PlainText: React.FC<Props> = ({
  children,
  fontColor = FontColor.Paragraph,
}) => (
  <p
    css={css`
        color: ${fontColor};
      font-size: 16;
      font-weight: normal;
    `}
  >
    {children}
  </p>
);

export default PlainText;
