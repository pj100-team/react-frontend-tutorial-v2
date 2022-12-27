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
  <p
    css={css`
      color: ${fontColor};
      font-size: ${16};
      font-weight: normal;
    `}
  >
    {children}
  </p>
);

export default PlainText;
