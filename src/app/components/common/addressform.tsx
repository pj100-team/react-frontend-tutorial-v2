/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import axios from 'axios';
import { css } from "@emotion/react";
import './addressform.css'

interface Props{
}

const AddressForm:React.FC<Props> = () => {
    const [zipcode, setZipcode] = useState("");
    const [address, setAddress] = useState(""); 
    const [errmsg, setErrmsg] = useState("");  // Error message

    console.log("Address Form Hello");

    const getAddress = async (): Promise<void> => {
        console.log("outside try");
        try {
            console.log("in try");
            const response = await axios.get("https://zipcloud.ibsnet.co.jp/api/search", {
                params: { zipcode: zipcode },
            });
            console.log("response: ", response); // check the structure of http responses: status, config, data, etc.
            
            if (response.data.status === 200) { // 正常時は 200
                const respond_address = response.data.results[0].address1 + response.data.results[0].address2 + response.data.results[0].address3;
                setAddress(respond_address);
                console.log(respond_address);
                setErrmsg(""); // reset 
            } else {
                console.log("Error status code: ", response.data.status);
                console.log("Error message: ", response.data.message);
                const display_errmsg = response.data.status + " " + response.data.message
                setAddress(""); // reset
                setErrmsg(display_errmsg);
            }

        } catch (error : unknown) { // any other errors that may arise
            console.error("There was an error: ", error);
            const display_errmsg = "郵便番号が有効であることをお確認ください。"
            setErrmsg(display_errmsg);
        }
    }

    const handleZipcode = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setZipcode (e.currentTarget.value);
        console.log("zipcode: ", zipcode); //lmao it's really weird
    };

    return (
        <div className="address-form"
            css={css`
                    display: flex;
                    flex-direction: column;
                    width: 600px;
                    margin: 30px auto;
                    padding: 30px;
                    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
            `}>
            <form>
                <div className="form-content">
                    <label htmlFor="zipcode">郵便番号</label>
                    <input
                        onChange={handleZipcode}
                        type="text"
                        pattern="([0-9]{7}|[0-9]{3}-[0-9]{4})"
                        placeholder="1234567"
                        id="zipcode"
                        name="zipcode"
                        required ></input>
                    <button type="button" onClick={getAddress}>検索</button>
                    { errmsg ? <p css={css` color: red; `}>{errmsg}</p> : null } {/* conditional rendering */}
                </div>
                <div className="form-content">
                    <label htmlFor="address">住所</label>
                    <input 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                        type="text"
                        id="address"
                        name="address"
                        value={address}
                        required ></input>
                </div>
            </form>
            
        </div>
    );
}

export default AddressForm