import React from "react";
interface Props {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
}
const CheckBox: React.FC<Props> = ({checked,setChecked}) => {
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
