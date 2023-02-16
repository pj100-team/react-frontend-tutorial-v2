/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import ListTile from "../common/listTile";
import { Items } from "../../../mock/data/items";
import { ElementColor } from "../../view/helper/layoutHelper";

interface Props{
    width: string;
}

const Calendar:React.FC<Props> = ({
    width,
}) => {
    return (
        <h1>Calendar</h1>
    );
}


export default Calendar