/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Checkbox from "./checkbox";
import Title from "./title";
import Caption from "./caption";
import { BackgroundColor } from "../../view/helper/layoutHelper";

interface Props {
    title: string
    subtitle: string
}

const ListTile: React.FC<Props> = ({
    title,
    subtitle,
}) => {
    const [isChecked,setChecked]=React.useState(false);
    return(
        <div
            css={css`
                width: 200px;
                margin: 0;
                border: dashed 1px black;
                padding: 15px;
                text-align: center;
                overflow-wrap: break-word;
                backgroundColor: ${isChecked ? BackgroundColor.Background : BackgroundColor.SubBackground};
            `}>
            <Title>{title}</Title>
            <Checkbox isChecked={isChecked} setChecked={setChecked}/>
            <Caption>{subtitle}</Caption>
        </div>
    );

}

export default ListTile;