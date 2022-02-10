import React from "react";

interface Props{
}

const CheckBox: React.FC<Props> = () => {
  const [checked,setCheck]=React.useState(false);
  const isChecked = () => setCheck(!checked);
  return (
    <input
    type="checkbox"
    checked={checked}
    onChange={isChecked}
    id="check"
    value="check"
    name="check"
    />
  )
}

export default CheckBox;
