/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Items } from "../../../mock/data/items";
import ListTile from "./listTile";

interface Props{
  width: number;
}

const CheckList:React.FC<Props> = ({width}) =>(
  <div css={css`
    display: flex;
    flex-wrap: wrap;
    width: ${width}%;
  `}>
    {Items.map(item =><ListTile title={item.name} subtitle={item.id.toString()} initCheck={item.isActive} />)}
  </div>
  )


export default CheckList