// import { css } from "@emotion/react";
import CheckBox from "./checkBox";
import { useState } from "react";
// import { BackgroundColor } from "../view/helper/layoutHelper";
interface props {
  title: string;
  subtitle: string;
}
const ListTile: React.FC<props> = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      style={
        isChecked
          ? {
              backgroundColor: "#ccc",
              width: "200px",
            }
          : {
              backgroundColor: "#eee",
              width: "200px",
            }
      }
    >
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
    </div>
  );
};

export default ListTile;
