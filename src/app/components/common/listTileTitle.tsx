/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { FontColor, FontSize } from "../../view/helper/typographyHelper";

interface Props {
  fontColor?: FontColor;
}
// created for List Tiles
const ListTileTitle: React.FC<Props> = ({
  children,
  fontColor = FontColor.Headline,
}) => (
  <h2
    css={css`
      color: ${fontColor};
      font-size: ${FontSize.Large};
      text-align: left;
    `}
  >
    {children}
  </h2>
);

export default ListTileTitle;
