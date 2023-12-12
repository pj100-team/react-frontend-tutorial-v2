/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import ListTile from "../common/listTile";
import { Items } from "../../../mock/data/items";
import { ElementColor } from "../../view/helper/layoutHelper";

interface Props{
    width: string;
}

const CheckList:React.FC<Props> = ({
    width,
}) => {
    return (
        <div
        css={css`
                // display: -webkit-flex;
                display: flex;
                // -webkit-justify-content: space-around;
                justify-content: space-around;
                // -webkit-align-items: center;
                align-items: center;
                // -webkit-flex-direction: column;
                flex-direction: column;
                width: ${width};
                border: solid 2px ${ElementColor.Main};
                border-radius: 5px;
                border-width: thin;
                height: 600px;
            `}>
            {Items.map((item) => <ListTile
                                    title={item.name}
                                    subtitle={item.id.toString()}
                                    initialCheck={item.isActive} />)}
        </div>
    );
}


export default CheckList