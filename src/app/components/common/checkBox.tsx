import { useState } from "react";

const CheckBox: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

    const check = () => {
        setIsChecked(!isChecked)
    }
    return (
        <>
  <input checked={isChecked} type="checkbox" onClick={check} />
  {isChecked && <p>cheked</p>}</>
)};

export default CheckBox;


