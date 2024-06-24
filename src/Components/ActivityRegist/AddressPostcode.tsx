import React, { useState } from "react";

declare global {
  interface Window {
    daum: any;
  }
}

const AddressSearch = () => {
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");

  const openDaumPostcode = () => {
    new window.daum.Postcode({
      oncomplete: (data: any) => {
        setPostcode(data.zonecode);
        setAddress(data.address);
      },
    }).open();
  };

  return (
    <div>
      <input type="text" value={postcode} readOnly placeholder="우편번호" />
      <input type="text" value={address} readOnly placeholder="주소" />
      <button type="button" onClick={openDaumPostcode}>
        주소 검색
      </button>
    </div>
  );
};

export default AddressSearch;
