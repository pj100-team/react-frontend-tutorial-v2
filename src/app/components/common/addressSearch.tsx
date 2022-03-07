/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { QueryFunction, useQuery } from 'react-query';

const fetchAddress :QueryFunction<ResponseObj>= (context) => fetch(`http://zipcloud.ibsnet.co.jp/api/search?zipcode=${context.meta?.address}`).then(res=>res.json());

type ResponseObj = {
  message:string,
  results:{
    address1:string,
    address2:string,
    address3:string,
    kana1:string,
    kana2:string,
    kana3:string,
    prefcode:string,
    zipcode:string
  }[] | null,
  status:number
}

const AddressSearch : React.FC = () => {
  const [address, setAddress] = useState('');
  const [clicked, setClicked] = useState('');
  const { data,isLoading } = useQuery<ResponseObj>(['address',clicked], fetchAddress,{meta:{address},onSuccess: (res)=>console.log(res)});
  const onChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAddress(value);
  };
  if (isLoading) {
    return <span>Loading...</span>;
  }
return(
    <>
      郵便番号:<input type="string" value={address} onChange={onChangeAddress}></input>
      <button onClick={ () => setClicked(address)
      }>検索</button>
        {data?.results ?
        data.results.map((address) => (
          <div >{address.address1+address.address2+address.address3}</div>
        )) :
        ''}
        {data?.message ? <div>{data?.message}</div> : ''}
    </>
    )
}



export default AddressSearch;