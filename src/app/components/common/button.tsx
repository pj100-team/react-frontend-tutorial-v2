/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface Props{
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<Props> = ({
    onClick,
    className,
    children
}) => {
    return (
        <button
            onClick={onClick}
            className={className}
            css={css`
                    background-color: #1e88e5;
                    &:active {
                        background-color: #1976d2;
                        font-size: small;
                    }
                    text: white
                `}>
                {children}
        </button>

    );
}

export default Button;