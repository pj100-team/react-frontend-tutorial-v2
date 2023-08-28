/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Checkbox from "./checkbox";
import Title from "./title";
import Caption from "./caption";
import { BackgroundColor } from "../../view/helper/layoutHelper";

interface Props {
    title: string;
    subtitle: string;
    initialChecked: boolean;
}

const ListTile: React.FC<Props> = ({
    title,
    subtitle,
    initialChecked,
}) => {
    const [isChecked,setChecked]=React.useState(initialChecked);
    return(
        <div
            css={css`
                width: 200px;
                margin: 5px;
                border: dashed 1px black;
                padding: 15px;
                text-align: center;
                overflow-wrap: break-word;
                background-color: ${isChecked ? BackgroundColor.Background : BackgroundColor.SubBackground};
            `}>
            <Title>{title}</Title>
            <Checkbox isChecked={isChecked} setChecked={setChecked}/>
            <Caption>{subtitle}</Caption>
        </div>
    );

}

export default ListTile;