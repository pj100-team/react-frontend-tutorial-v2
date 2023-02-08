import { useState } from "react";

export const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const onChangeNumber = (event: any) => {
    setPhoneNumber(event.target.value);
  };

  const onClickCheckNumber = () => {
    alert(phoneNumber);
  };

  const isActive = (num: string): boolean => {
    let pattern = "^[0-9]{11}$";
    if (num.match(pattern) !== null) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div style={{ width: "350px", margin: "0 auto", textAlign: "center" }}>
      <p>電話番号：</p>
      <input type="text" onChange={onChangeNumber} value={phoneNumber} />
      <button onClick={onClickCheckNumber} disabled={isActive(phoneNumber)}>
        決定
      </button>
    </div>
  );
};
