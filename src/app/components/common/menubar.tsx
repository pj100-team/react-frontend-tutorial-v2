/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import './menubar.css'
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom"

interface Props{
}

const MenuBar:React.FC<Props> = () => {
    return (
        <div className="menu">
            <Link to="/" className="site-title">Home</Link>
            <ul>
                <CustomLink to="/calendar">Calendar</CustomLink>
                <CustomLink to="/checklist">Checklist</CustomLink>
                <CustomLink to="/addressSearch">Address Search</CustomLink>
            </ul>
        </div>
    )
}

const CustomLink = ({ children, to, ...props } : LinkProps) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default MenuBar