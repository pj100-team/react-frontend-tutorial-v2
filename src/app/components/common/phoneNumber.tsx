import { useState } from "react";

const PhoneNumber : React.FC = () => {
  const [phoneNumber,setPhoneNumber] = useState('');
  const onChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPhoneNumber(value);
  };
  const isEleven = (input:string):boolean =>{
    if(input.length == 11)return false;
    else return true;
  }
  return(
    <>
      電話番号:<input type="number" value={phoneNumber} onChange={onChangeNumber}></input>
      <button onClick={()=>alert(phoneNumber)} disabled={isEleven(phoneNumber)}>決定</button>
    </>
  )
}

export default PhoneNumber;