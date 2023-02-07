// useState is a Hook that lets you add React state to function components
import { useState } from 'react';

// function toggle(value: boolean){
//     return !value;
//   }

const CheckBoxApp = () => {
  // Use React's useState Hook
  const [checked, setChecked] = useState(false);

  // Use an event handler
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        Label
      </label>
    </div>
  )
}

const Checkbox = (props) =>

export default CheckBoxApp;
