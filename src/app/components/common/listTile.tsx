/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { ElementColor } from "../../view/helper/layoutHelper";
import Caption from "./caption";
import CheckBox from "./checkBox";
import Title from "./title";

interface Props {
  title:string;
  subtitle:string;
  initCheck:boolean;
}

const ListTile: React.FC<Props> = ({
  title,
  subtitle,
  initCheck,
}) => {
  const [checked,setChecked]=React.useState(initCheck);
  return (<div css={css`
  margin:10px;
  width: 200px;
  text-align: center;
  border: 2px solid #000000;
  border-radius: 10px;
  padding: 10px;
  background-color: ${checked ? ElementColor.Main :ElementColor.Sub};
  overflow-wrap: break-word;
  `}><Title>{title}</Title><Caption>{subtitle}</Caption><CheckBox checked={checked} setChecked={setChecked}/></div>
  )
}

export default ListTile;