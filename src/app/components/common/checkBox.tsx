// useState is a Hook that lets you add React state to function components
// import React, { useState } from 'react';
import React from "react";

interface Props {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

// the checkbox component
const Checkbox: React.FC<Props> = ({
  checked, // parameters
  setChecked
}) => {
    // Use an event handler
    const handleChange = () => {setChecked(!checked)};
  
  return (
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
  )
}

export default Checkbox;
