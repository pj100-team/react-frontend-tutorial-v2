/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import './menubar.css'

interface Props{
}

const MenuBar:React.FC<Props> = () => {
    return (
        <div className="menu">
            <a href="/" className="site-title">Home</a>
            <ul>
                <li><a href="/addressSearch">Address Search</a></li>
                <li><a href="/calendar">Calendar</a></li>
                <li><a href="/checklist">Checklist</a></li>
            </ul>
        </div>
    )
}

export default MenuBar