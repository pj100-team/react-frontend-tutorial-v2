import React from "react";

interface Props{
}

const CheckBox: React.FC<Props> = () => {
  const [checked,setChecked]=React.useState(false);
  const onClick = () => setChecked(!checked);
  return (
    <input
    type="checkbox"
    checked={checked}
    onChange={onClick}
    value="check"
    />
  )
}

export default CheckBox;
