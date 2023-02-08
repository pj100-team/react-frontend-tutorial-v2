// import { css } from "@emotion/react";
import CheckBox from "./checkBox";
// import { useState } from "react";
interface Props {
  // key: number;
  title: string;
  subtitle: string;
  isActive: boolean;
  onClick: () => void;
  onChange: () => void;
}
const ListTile: React.FC<Props> = ({
  title,
  subtitle,
  isActive,
  onClick,
  onChange,
}) => {
  return (
    <div
      style={
        isActive
          ? {
              backgroundColor: "#ccc",
              width: "200px",
              margin: "30px",
            }
          : {
              backgroundColor: "#eee",
              width: "200px",
              margin: "30px",
            }
      }
    >
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <CheckBox
        isChecked={isActive}
        setIsChecked={onClick}
        onChange={onChange}
      />
    </div>
  );
};

export default ListTile;
