/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { FontColor, FontSize } from "../../view/helper/typographyHelper";

interface Props {
  fontColor?: FontColor;
}

// defining a component called Caption
const Caption: React.FC<Props> = ({
  children,
  fontColor = FontColor.SubHeadline,
}) => ( // defining a function. Below is HTML code describing how to display
  <h2
    css={css`
      color: ${fontColor};
      font-size: ${FontSize.Large};
      text-align: center;
    `}
  >
    {children}
  </h2>
);

export default Caption;
