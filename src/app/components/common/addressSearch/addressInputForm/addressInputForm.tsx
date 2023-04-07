/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import "../addressSearch.css";
import "./addressInputForm.css";
import type { Zipcode , Address } from "../addressSearch";


interface Props {
    address: Address,
    setAddress?: Dispatch<SetStateAction<Address>>,
    addressKana: Address,
    setAddressKana?: Dispatch<SetStateAction<Address>>,
}

const AddressInputForm: React.FC<Props> = ({
    address,
    setAddress,
    addressKana,
    setAddressKana,
}) => {
  const searchAddress = () => {

  }
  const stringOfAddress = (address: Address) => {
    return address.address1 + address.address2 + address.address3;
  }

  const [addressText, setAddressText] = useState("");
  const [addressTextKana, setAddressTextKana] = useState("");

  useEffect(() => {
    setAddressText(stringOfAddress(address));
    setAddressTextKana(stringOfAddress(addressKana));
  }, [address, addressKana])
  

return (
    <div>
        <div className="AddressInputForm">
            <label className="Label">住所(カナ)</label>
            <span className="Colon">:</span>
            <div className="Form">
                <input className="AddressInput" value={addressTextKana} onChange={(event) => setAddressTextKana(event.target.value)}/>
            </div>
        </div>

        <div className="AddressInputForm">
            <label className="Label">住所</label>
            <span className="Colon">:</span>
            <div className="Form">
                <input className="AddressInput" value={addressText} onChange={(event) => setAddressText(event.target.value)}/>
            </div>
        </div>
        <div className="SentButton">
            <button onClick={searchAddress}>送信</button>
        </div>
    </div>
)};

export default AddressInputForm;
