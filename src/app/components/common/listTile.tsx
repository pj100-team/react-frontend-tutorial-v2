import React from "react";

interface Props {
    title: string;
    subtitle: string;
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
                    backgroundColor: isChecked ? 'blue' : '', 
                }}>

            </div>
        </div>
    )

}