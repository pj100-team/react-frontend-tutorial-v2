import { css } from "@emotion/react";
import React from "react";
import { FontColor, FontSize } from "../../view/helper/typographyHelper";

interface Props {
  fontColor?: FontColor;
}

export const Plaintext: React.FC<Props> = ({
  children,
  fontColor = FontColor.Paragraph,
}) => (
  <h3
    css={css`
      color: ${fontColor};
      font-size: ${FontSize.Medium};
      text-align: center;
      font-weight: normal;
    `}
  >
    {children}
  </h3>
);

export default Plaintext;

