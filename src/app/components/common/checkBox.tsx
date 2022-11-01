import { useState } from "react";

const CheckBox: React.FC = () => {
  const [isCheked, setIsChecked] = useState(false);
  return (
    <>
      <input
        type="checkbox"
        checked={isCheked}
        onChange={() => setIsChecked(!isCheked)}
      />
      <p>{isCheked ? "○" : "✖️"}</p>
    </>
  );
};

export default CheckBox;

// input : checkBox {

//  }
