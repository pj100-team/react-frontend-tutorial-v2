// import { css } from "@emotion/react";
import CheckBox from "./checkBox";
// import { useState } from "react";
interface Props {
  // key: number;
  // title: number;
  subtitle: string;
  isActive: boolean;
  onClick: () => void;
  onChange?: () => void;
}
const ListTile: React.FC<Props> = ({
  // title,
  subtitle,
  isActive,
  onClick,
  onChange = () => {},
}) => {
  return (
    <div
      style={
        isActive
          ? {
              backgroundColor: "#aaa",
              width: "250px",
              border: "solid 1px #ccc",
            }
          : {
              backgroundColor: "#fff",
              width: "250px",
              border: "solid 1px #ccc",
            }
      }
    >
      {/* <h2>{title}</h2> */}
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
