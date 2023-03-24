/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { FontColor, FontSize, CheckBoxColor } from "../../view/helper/typographyHelper";
import { Pallet } from "../../view/helper/colorHelper";

interface Props {
  checked : boolean; 
  onClick : () => void
}

const CheckBox: React.FC<Props> = ({
  children,
  checked,
  onClick,
}) => {
  return (
  <span onClick={onClick}
    css={css`
      color: ${checked ? CheckBoxColor.Finished : CheckBoxColor.Unfinished };
      font-size: ${FontSize.Medium};
      text-align: center;
      font-weight: normal;
      padding: 5px;
    `}
  >
    {(children ? children : (checked ? "◉" : "○" ) )}
  </span>
  );
};

export default CheckBox;
