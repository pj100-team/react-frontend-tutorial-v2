/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import axios from "axios";
import "./addresssearch.css"

interface AddressInformation {
    address1:"",
    address2:"",
    address3:"",
    kana1:"",
    kana2:"",
    kana3:"",
    prefcode:"",
    zipcode:"",
}

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
        zipcode:"",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const onClickFetchData = async () => {
        let updateAddressInformation = {
            address1:"",
            address2:"",
            address3:"",
            kana1:"",
            kana2:"",
            kana3:"",
            prefcode:"",
            zipcode:"",
        };
        setIsLoading(true);
        setIsError(false);
        await axios
          .get("https://zipcloud.ibsnet.co.jp/api/search", {
            params: {
              zipcode: text,
            },
          })
          .then((res) => {
            const address: AddressInformation[] = res.data.results;
            address.map((item: AddressInformation) => {
                for (const key in item) {
                    updateAddressInformation[key as keyof AddressInformation] =
                        item[key as keyof AddressInformation];
                }
            });
            setIsLoading(false);
            setAddress(updateAddressInformation)
          })
          .catch(() => {
            setIsError(true);
            setIsLoading(false);
          });
    };

    return(
        <div>
            <div className="title">Address Search</div>
            <input
                type = "text"
                value={text}
                pattern="[0-9]{7}"
                onChange={(event) => setText(event.target.value)}
            />
            <button onClick={onClickFetchData}>検索</button>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {!isError ? (
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
                    ) : (
                        <p className="error-message">正しい郵便番号を入力してください</p>
                    )}
                </>
            )}
        </div>

    );
}


export default AddressSearch;