/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import axios from "axios";
import "./addresssearch.css"

const AddressSearch = () => {
    const [text, setText] = useState("");
    const [address, setAddress] = useState({
        address1:"",
        address2:"",
        address3:"",
        kana1:"",
        kana2:"",
        kana3:"",
        prefcode:"",
        zipcode:""
    });
    const [isLoading, setIsLoading] = useState(false);

    const onClickFetchData = async () => {
        setIsLoading(true);
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
                kana1: res.data.results[0].kana1,
                kana2: res.data.results[0].kana2,
                kana3: res.data.results[0].kana3,
                prefcode: res.data.results[0].prefcode,
                zipcode: res.data.results[0].zipcode,
            });
            setIsLoading(false);
          })
          .catch((error) => {
            alert(error.message);
            setIsLoading(false);
          })
    }

    return(
        <div>
            <div className="title">Address Search</div>
            <label>
                <input
                    type = "text"
                    value={text}
                    pattern="[0-9]{7}"
                    onChange={(event) => setText(event.target.value)}
                />
                <span className="error-message">
                    正しい郵便番号で入力してください。
                </span>
            </label>
            <button onClick={onClickFetchData}>検索</button>
            <div>{isLoading ? <p>Loading...</p> : null}</div>
            <div className="results">
                <p>都道府県：{address.address1}</p>
                <p>市区町村：{address.address2}</p>
                <p>町域：{address.address3}</p>
                <p>都道府県カナ：{address.kana1}</p>
                <p>市区町村カナ：{address.kana2}</p>
                <p>町域カナ：{address.kana3}</p>
                <p>都道府県コード：{address.address1}</p>
                <p>郵便番号：{address.zipcode}</p>
            </div>
        </div>

    );

}


export default AddressSearch;