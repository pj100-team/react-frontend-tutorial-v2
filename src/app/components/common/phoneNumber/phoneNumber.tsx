/** @jsxImportSource @emotion/react */
import React, { useState, Dispatch, SetStateAction } from "react";
import {Link} from "react-router-dom"
import "./phoneNumber.css";

interface Props {
}

const PhoneNumber: React.FC<Props> = () => {



return (
  <form action="" method="get" name="form1">
    <div>
      <label id="phoneNumber">電話番号: </label>
      <input type="text" name="phoneNumber" id="phoneNumber" required/>
    </div>
    <div>
      <input type="submit" value="send"/>
    </div>
  </form>
)};

export default PhoneNumber;
