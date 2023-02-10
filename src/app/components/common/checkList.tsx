import { Items } from "../../../mock/data/items";
// import CheckBox from "./checkBox";
import ListTile from "./ListTile";
import React, { useState } from "react";

const CheckList: React.FC = () => {
  const [items, setItems] = useState(Items);

  const checked = (i: number) => {
    setItems(
      items.map((item, index) =>
        index === i ? { ...item, isActive: !item.isActive } : { ...item }
      )
    );
  };

  const itemList = items.map((item, i) => {
    const change = () => {};
    return (
      <div key={item.id}>
        <ListTile
          // title={item.name}
          subtitle={item.id.toString()}
          isActive={item.isActive}
          onClick={() => checked(i)}
          onChange={change}
        />
        <p>{item.isActive && "check!!"}</p>
      </div>
    );
  });

  return <>{itemList}</>;
};
export default CheckList;
