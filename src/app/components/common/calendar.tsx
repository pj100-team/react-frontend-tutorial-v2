/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { FontColor, FontSize } from "../../view/helper/typographyHelper";

interface Props {
  fontColor?: FontColor;
  fontSize?: FontSize;
}

const Calendar: React.FC<Props> = ({
  children,
  fontColor = FontColor.BlackText,
  fontSize = FontSize.Medium,
}) => (
  <div
    css={css`
      color: ${fontColor};
      font-size: ${fontSize};
      text-align: center;
      font-weight: normal;
    `}
  >
    {children}
  </div>
);

export default Calendar;
