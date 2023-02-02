import axios from "axios";
import { useState } from "react";
import "./AddressSearch.css";

type Address = {
  address1: string;
  address2: string;
  address3: string;
};
export const AddressSearch = () => {
  const [text, setText] = useState("");
  const [address, setAddress] = useState<Address>({
    address1: "",
    address2: "",
    address3: "",
  });
  // const [address2, setAddress2] = useState("");
  // const [address3, setAddress3] = useState("");

  const onChangeAddress = (event: any) => {
    setText(event.target.value);
    console.log(text);
  };

  const onClickFetchData = async () => {
    await axios
      .get("https://zipcloud.ibsnet.co.jp/api/search", {
        params: {
          zipcode: text,
        },
      })
      .then((res) => {
        setAddress({
          address1: res.data.results[0].address1,
          address2: res.data.results[0].address2,
          address3: res.data.results[0].address3,
        });
      })
      .catch(() => {
        alert("住所を取得できませんでした");
      });
  };

  return (
    <div className="searchWrapper">
      <h2>AddressSearch</h2>
      <div className="searchBlock">
        <span>郵便番号：</span>
        <input
          type="text"
          value={text}
          onChange={onChangeAddress}
          pattern="[0-9]{7}"
        />
        <button onClick={onClickFetchData}>検索</button>
        <div className="address">
          <br />
          <br />
          <p>都道府県：{address.address1}</p>
          <br />
          <br />
          <p>市区町村：{address.address2}</p>
          <br />
          <br />
          <p>町域：{address.address3}</p>
        </div>
      </div>
    </div>
  );
};
