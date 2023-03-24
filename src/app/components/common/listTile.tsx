/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { FontColor, FontSize } from "../../view/helper/typographyHelper";
import { BreakPoint, BackgroundColor, ElementColor, ListTileColor } from "../../view/helper/layoutHelper";
import { Pallet } from "../../view/helper/colorHelper";
import CheckBox from "./checkBox";
import Title from "./title";
import PlainText from "./plainText";

interface Props {
  title : string;
  subtitle ?: string;
  fontColor?: FontColor;
  checked ?: boolean
}

const ListTile: React.FC<Props> = ({
  children,
  title="",
  subtitle="",
  fontColor = FontColor.BlackText,
  checked=false,
}) => {
  const [_checked, setChecked] = useState(checked);
  const toggleChecked = React.useCallback(() => setChecked((prev) => !prev), [setChecked]);
  const textwidth = 165;
  const tileWidth = 200;
  const frameSize = 5;
  const tileHeight = 100;
  return (
    <div
    css={css`
      width : ${tileWidth - 2 * frameSize}px;
      height : ${tileHeight - 2 * frameSize}px;
      background-color : ${_checked ? ListTileColor.FrameFinished : ListTileColor.FrameUnfinished };
      padding : ${frameSize}px;
    `}>
    <div
    css={css`
      display : flex;
      width : ${tileWidth - 2 * frameSize}px;
      height : ${tileHeight - 2 * frameSize}px;
      background-color : ${_checked ? ListTileColor.Finished : ListTileColor.Unfinished };
      padding : 0px;
    `}>
      <div css={css`
        width : ${textwidth}px;
        white-space : pre-wrap;
        line-break : normal;
        word-wrap : break-word;
      `}>
        <PlainText fontColor={FontColor.BlackText} fontSize={FontSize.Medium}>{title}</PlainText>
        <PlainText fontColor={FontColor.DarkGrayText} fontSize={FontSize.Medium}>{subtitle}</PlainText>
      </div>
      <div css={css`
        width : ${(tileWidth - 2 * frameSize) - textwidth}px;
        margin : auto auto auto auto;
      `}>
        <CheckBox checked={_checked} onClick={toggleChecked}/>
      </div>
    </div>
    </div>
  );
};

export default ListTile;


