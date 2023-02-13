/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import CheckBox from "../common/checkBox";
import Title from "../common/title";
import Caption from "../common/caption";
import { ElementColor } from "../../view/helper/layoutHelper";

interface Props {
    title: string;
    subtitle: string;
    checked: boolean;
    setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListTile: React.FC<Props> = ({
    title,
    subtitle,
    checked,
    setChecked
}) => {
    
    return (
        <div
        css={css`
                    border: solid 2px #329eff;
                    border-radius: 5px;
                    width: 200px;
                    background-color: ${checked ? ElementColor.Sub : ElementColor.Main};
                    overflow-wrap: break-word;
            `}>
            <div css={css`margin-right: 100px;`}><Title>{title}</Title></div>
            <p css={css`text-align: right; `}><CheckBox checked={checked} setChecked={setChecked}></CheckBox></p>
            <div css={css`margin-right: 100px;`}><Caption>{subtitle}</Caption></div>
        </div>
    )
}

export default ListTile;