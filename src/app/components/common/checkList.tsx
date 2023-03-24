/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { FontColor, FontSize } from "../../view/helper/typographyHelper";
import { BreakPoint, BackgroundColor, ElementColor, ListTileColor } from "../../view/helper/layoutHelper";
import { Pallet } from "../../view/helper/colorHelper";
import CheckBox from "./checkBox";
import Title from "./title";
import PlainText from "./plainText";
import ListTile from "./listTile";
import { Item } from "../../../mock/data/items"

interface Props {
  ListTileDatas : Item[];
  width ?: number;
}

const CheckList: React.FC<Props> = ({
  children,
  ListTileDatas,
}) => {
  const ListTileLists = 
    ListTileDatas.map((ltd, i) => 
      <div css={css`margin-top: 0px`}>
        <ListTile 
        key={ltd.id}
        title={ltd.name}
        subtitle={""}
        checked={ltd.isActive}
        />
      </div>
    );
  console.log(ListTileLists);
  const ListTileWidth = 200;
  const totalListTileNum = ListTileDatas.length;
  const gapSizeWidth = 5;
  const gapSizeHeight = 20;
  const ListTileColumnNum = document.documentElement.clientWidth < 2 * ListTileWidth + gapSizeWidth ?
    1 : 1 + Math.floor((document.documentElement.clientWidth - ListTileWidth)/(ListTileWidth + gapSizeWidth));
  const ListTileRowNum = Math.ceil(totalListTileNum / ListTileColumnNum)
  return (
  <div css={css`
    display: grid;
    grid-template: repeat(${ListTileRowNum}, 1fr) / repeat(${ListTileColumnNum}, 1fr) ;
    gap: ${gapSizeHeight}px ${gapSizeWidth}px;
  `}>
    {ListTileLists}
  </div>);
};

export default CheckList;


