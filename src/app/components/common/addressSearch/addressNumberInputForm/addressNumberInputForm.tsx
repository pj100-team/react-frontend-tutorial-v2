/** @jsxImportSource @emotion/react */
import React, { useState, Dispatch, SetStateAction } from "react";
import "../addressSearch.css";
import "./addressNumberInputForm.css";
import type { Zipcode , Address } from "../addressSearch";
import axios from "axios";

interface Props {
    zipcode: Zipcode;
    setZipcode: Dispatch<SetStateAction<Zipcode>>;
}

const AddressNumberInputForm: React.FC<Props> = ({
    zipcode,
    setZipcode,
}) => {

    const [main, setMain] = useState("");
    const [sub, setSub] = useState("");
    
    const onClick = () => {
        const regExpMain = /^\d{3}$/;
        const regExpSub = /^\d{4}$/;
        const resMain = main === "" ? "null" : regExpMain.test(main) ? main : "invalid";
        const resSub = sub === "" ? "null" : regExpSub.test(sub) ? sub : "invalid";

        setZipcode({ main : resMain, sub : resSub });
    }
    
    return (
        <div className="AddressNumberInputForm">
            <label className="Label">郵便番号</label> 
            <span className="Colon">:</span>
            <div className="Form">
                <input id="zipcodeMainInputText" className="ZipcodeInput" value={main} onChange={(event) => setMain(event.target.value) }/>
                <span>-</span>
                <input id="zipcodeSubInputText" className="ZipcodeInput" value={sub} onChange={(event) => setSub(event.target.value) }/>
                <button onClick={onClick}>検索</button>
            </div>
        </div>
    )
};

export default AddressNumberInputForm;
