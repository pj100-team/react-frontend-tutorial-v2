import { css } from "@emotion/react";
import React from "react";
import { FontColor} from "../../view/helper/typographyHelper";

interface Props{
  fontColor?: FontColor;
}

const PlainText: React.FC<Props> = ({
  children,
  fontColor = FontColor.BlackText,
}) => (
  <div
    css={css`
    color: ${fontColor};
    font-size: 16px;
    font-weight: normal;
    `}
    >
    {children}
  </div>
)
export default PlainText;