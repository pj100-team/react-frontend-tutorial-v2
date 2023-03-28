/** @jsxImportSource @emotion/react */
import React, { useState, Dispatch, SetStateAction } from "react";
import "../addressSearch.css";
import "./addressInputForm.css";

interface Props {
    addressText: string,
    setAddressText: Dispatch<SetStateAction<string>>
}

const AddressInputForm: React.FC<Props> = ({
    addressText,
    setAddressText,
}) => {
  const searchAddressText = () => {

  }
  

return (
    <div className="AddressInputForm">
    <label className="Label">住所</label>
    <span className="Colon">:</span>
    <div className="Form">
        <input className="AddressInput" value={addressText} onChange={(event) => setAddressText(event.target.value)}/>
        <button onClick={searchAddressText}>送信</button>
    </div>
    </div>
)};

export default AddressInputForm;
