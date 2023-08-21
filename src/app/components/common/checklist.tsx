/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Items } from "../../../mock/data/items";
import Title from "./title";
import Caption from "./caption";

interface Props {
    width: number;
}

const CheckList: React.FC<Props> = ({
    width,
}) => {
    const [isChecked,setChecked]=React.useState(false);
    return(
       <ul
        css={css`
        display: flex;
        list-style: none;
        margin: 0;
        border: dashed 1px black;
        padding: 15px;
        text-align: center;
        `}>
            <i>
                <Title>hi</Title>
            </i>
       </ul>
    );

}

export default CheckList;