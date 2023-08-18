import React from "react";

interface Props{
  isChecked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const Checkbox: React.FC<Props> = ({isChecked,setChecked}) => {
  const handleClick = () => {
    setChecked(!isChecked);
  };

  return(
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleClick}
      value="check"
      />
    )
  };

export default Checkbox;