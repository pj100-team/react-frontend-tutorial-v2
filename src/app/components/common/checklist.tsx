/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Items } from "../../../mock/data/items";
import ListTile from "./listtile";

interface Props {
    width: string;
}

const CheckList: React.FC<Props> = ({
    width,
}) => {
    return(
       <div
        css={css`
            width: ${width};
            display: flex;
            list-style: none;
            justify-content: center;
            align-items: center;
            flex-direction: row;
        `}>
            {Items.map((item) => (
                <ListTile
                    title={item.name}
                    subtitle={item.id.toString()}
                    initialChecked={item.isActive}
                />
            ))}
       </div>
    );

}

export default CheckList;