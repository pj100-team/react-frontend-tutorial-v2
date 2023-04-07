/** @jsxImportSource @emotion/react */
import React, { useState, Dispatch, SetStateAction } from "react";
import {Link} from "react-router-dom"
import "./menuBar.css";

interface Props {
}

const MenuBar: React.FC<Props> = () => {



return (
  <nav className="MenuBar">
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/checkList">CheckList</Link></li>
        <li><Link to="/addressSearch">AddressSearch</Link></li>
    </ul>
  </nav>
)};

export default MenuBar;
