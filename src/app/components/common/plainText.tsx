/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { FontColor, FontSize } from "../../view/helper/typographyHelper";

interface Props {
  fontColor?: FontColor; // ? marks the parameter as optional
}

const PlainText: React.FC<Props> = ({ // arrow function components
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
