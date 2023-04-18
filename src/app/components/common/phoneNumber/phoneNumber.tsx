/** @jsxImportSource @emotion/react */
import React, { useState, Dispatch, SetStateAction } from "react";
import {Link} from "react-router-dom"
import "./phoneNumber.css";

interface Props {
}

const PhoneNumber: React.FC<Props> = () => {

    const onClick : (() => void) = () => {
        const phoneNumber = (document.getElementById("phoneNumber") as HTMLInputElement).value;
        const regExp = /^\d{11}$/;
        if (regExp.test(phoneNumber)) {

        }
        else {
            alert("間違った形式です。")
        }  
        // useState
    }


return (
    <form >
        <div>
            <label>電話番号:</label>
            <input type="text" id="phoneNumber" name="phoneNumber" />
        </div>
        <input type="submit" onClick={onClick}/>
    </form>
)};

export default PhoneNumber;
