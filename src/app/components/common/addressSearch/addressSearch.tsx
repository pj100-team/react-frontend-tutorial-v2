/** @jsxImportSource @emotion/react */
import React, { useState, Dispatch, SetStateAction } from "react";
import dayjs from "dayjs";
import AddressNumberInputForm from './addressNumberInputForm/addressNumberInputForm';
import AddressInputForm from './addressInputForm/addressInputForm';
import "./addressSearch.css";

interface Props {
}

const AddressSearch: React.FC<Props> = () => {
  const [addressText, setAddressText] = useState("");
  const [addressNumber, setAddressNumber] = useState("");

  

return (
  <div className="AddressSearch">
    <AddressNumberInputForm addressNumber={addressNumber} setAddressNumber={setAddressNumber} addressText={addressText} setAddressText={setAddressText}/>
    <AddressInputForm addressText={addressText} setAddressText={setAddressText}/>
  </div>
)};

export default AddressSearch;
