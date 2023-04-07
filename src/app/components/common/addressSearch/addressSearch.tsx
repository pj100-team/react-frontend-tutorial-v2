/** @jsxImportSource @emotion/react */
import React, { useEffect,useState, Dispatch, SetStateAction } from "react";
import dayjs from "dayjs";
import AddressNumberInputForm from './addressNumberInputForm/addressNumberInputForm';
import AddressInputForm from './addressInputForm/addressInputForm';
import "./addressSearch.css";
import axios from "axios";

type Address = {
  address1 : string;
  address2 : string; 
  address3 : string;
}

type Zipcode = {
  main : string;
  sub : string; 
}

interface Props {
}

const AddressSearch: React.FC<Props> = () => {
  const [address, setAddress] = useState<Address>({ address1 : "", address2 : "", address3 : "",});
  const [addressKana, setAddressKana] = useState<Address>({ address1 : "", address2 : "", address3 : "",});
  const [zipcode, setZipcode] = useState<Zipcode>({ main : "", sub : ""});

  const searchAddress = () => {
    //Zipcodeを元に郵便番号APIにより住所のデータを取得
    axios
    .get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${ zipcode.main + zipcode.sub }`)
    .then((res) => {
      console.log(res);

      if (res.status !== 200){
        throw new Error(res.data.message === null ? "住所の取得に失敗しました。" : res.data.message);
      }
      else {
        const [addressData, addressKanaData] : Address[] = (
          res.data.results === null ? 

          //該当する結果がない場合
          [{ address1 : "", address2 : "", address3 : "",}, { address1 : "", address2 : "", address3 : "",}]: 

          //結果のうちAddressを構成する要素だけ取り出す。
          [(({address1 = "", address2 = "", address3 = "", ...rest}) => ({ address1 : address1, address2 : address2, address3 : address3,}))(res.data.results[0]),
          (({kana1 = "", kana2 = "", kana3 = "", ...rest}) => ({ address1 : kana1, address2 : kana2, address3 : kana3,}))(res.data.results[0])]
        );
        
        //住所のデータから住所の文字列を取り出してAddressにsetする。
        setAddress(addressData);
        setAddressKana(addressKanaData);
      }
    })
  };

  useEffect(() => {
    
    //何も入力されてない。
    if (zipcode.main === "null" && zipcode.sub === "null") return;

    //無効な文字列
    if (!(/^\d{3}$/.test(zipcode.main)) || !(/^\d{4}$/.test(zipcode.sub))) {

      return;
    }

    //郵便番号から住所を検索してセットする。
    searchAddress()
  },[zipcode]);

return (
  <div className="AddressSearch">
    <AddressNumberInputForm zipcode={zipcode} setZipcode={setZipcode} />
    <AddressInputForm address={address} addressKana={addressKana} />
  </div>
)};

export default AddressSearch;
export type {Address};
export type {Zipcode};

