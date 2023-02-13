import React from "react";
import CheckBox from "../common/checkBox";
import Title from "../common/title";
import Caption from "../common/caption";

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
        <div>
            <div
                style={{
                    border: 'solid 2px #329eff',
                    borderRadius: '5px',
                    width: '200px',
                    backgroundColor: checked ? 'salmon' : '',
                    overflowWrap: 'break-word'
                }}>
                <Title>{title}</Title>
                <p style={{ textAlign: "right" }}><CheckBox checked={checked} setChecked={setChecked}></CheckBox></p>
                <Caption>{subtitle}</Caption>
            </div>
        </div>
    )
}

export default ListTile;