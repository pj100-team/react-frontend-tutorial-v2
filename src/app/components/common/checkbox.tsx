import React, { useState } from "react";

const Checkbox = () => {
  const [isChecked, setChecked] = useState(false);
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