/** @jsxImportSource @emotion/react */
import React, { useState, Dispatch, SetStateAction } from "react";
import "../addressSearch.css";
import "./addressNumberInputForm.css";

interface Props {
    addressNumber: string;
    setAddressNumber: Dispatch<SetStateAction<string>>;
    addressText?: string;
    setAddressText: Dispatch<SetStateAction<string>>;
}

const AddressNumberInputForm: React.FC<Props> = ({
    addressNumber,
    setAddressNumber,
    addressText,
    setAddressText,
}) => {
    
    const searchAddressText = () => {
        //addressNumberを元に郵便番号APIにより住所のデータを取得
    
        //住所のデータから住所の文字列を取り出してaddressTextにsetする。
        setAddressText("xxx xxx xxx")
    };
    
    return (
        <div className="AddressNumberInputForm">
            <label className="Label">郵便番号</label> 
            <span className="Colon">:</span>
            <div className="Form">
                <input value={addressNumber} onChange={(event) => setAddressNumber(event.target.value)}/>
                <button onClick={searchAddressText}>検索</button>
            </div>
        </div>
    )
};

export default AddressNumberInputForm;
