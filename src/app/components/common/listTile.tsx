/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import CheckBox from "../common/checkBox";
import ListTileTitle from "../common/listTileTitle";
import { ElementColor } from "../../view/helper/layoutHelper";
import PlainText from "./plainText";
import { FontColor } from "../../view/helper/typographyHelper";

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
                    border: solid 2px ${ElementColor.Main};
                    border-radius: 5px;
                    width: 200px;
                    background-color: ${checked ? ElementColor.White : ElementColor.Sub};
                    overflow-wrap: break-word;
            `}>
            <div css={css`
                            margin-left: 10px;
                            margin-right: 40px;
                            margin-top: 10px;
                `}><ListTileTitle>{title}</ListTileTitle></div>
            <p css={css`text-align: right; margin-right: 10px;`}><CheckBox checked={checked} setChecked={setChecked}></CheckBox></p>
            <div css={css`
                            margin-left: 10px;
                            margin-right: 40px;
                            margin-bottom: 10px;
                `}><PlainText>{subtitle}</PlainText></div>
        </div>
    )
}

export default ListTile;