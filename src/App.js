import { useState } from "react";
import { openPayment } from "./utils/EpayVnpt";
import $ from "jquery";

import { sha256, sha224 } from "js-sha256";

function App() {
  const date = new Date();
  const time =
    date.getFullYear().toString() +
    (date.getMonth() + 1).toString() +
    date.getDay().toString() +
    date.getHours().toString() +
    date.getMinutes().toString() +
    date.getSeconds().toString();

  const Sha = sha256(`${time} + "EPAY000001" + "uniquenumber" +
"EPAY000001" +"10000" +"rf8whwaejNhJiQG2bsFubSzccfRc/iRYyGUn6SPmT6y/L7A2XABbu9y4GvCoSTOTpvJykFi6b1G0crU8et2O0Q=="`);

  const initialState = {
    merId: "EPAY000001",
    currency: "VND",
    amount: "100000",
    invoiceNo: "OrdNo20191003054607",
    goodsNm: "sup",
    payType: "QR",
    callBackUrl: "",
    notiUrl: "",
    reqDomain: "",
    description: "anh khong phai la meo",
    merchantToken: `${Sha}`,
    userLanguage: "VN",
    timeStamp: `${time}`,
    merTrxId: `EPAY00000120191003054607`,
    windowColor: "#ef5459",
    windowType: "1",
  };

  const [contentEpay, setContentEpay] = useState(initialState);
  const {
    merId,
    amount,
    invoiceNo,
    goodsNm,
    payType,
    callBackUrl,
    notiUrl,
    reqDomain,
    merchantToken,
    description,
    userLanguage,
    timeStamp,
    merTrxId,
    windowColor,
    windowType,
  } = contentEpay;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setContentEpay({ ...contentEpay, [name]: value });
  };

  return (
    <div className="App">
      <div
        className="container"
        style={{
          height: "auto",
          border: "1px solid #f1f1",
          position: "relative",
          width: "50%",
          marginTop: "5%",
          marginBottom: "5%",
        }}>
        <h2>Thanh toán cổng epay</h2>
        <form id="megapayForm" name="megapayForm" method="POST">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">merId</label>
            <input
              type="text"
              className="form-control"
              value={merId}
              name="merId"
              maxLength={10}
              placeholder="Enter amount"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Amount</label>
            <input
              type="amount"
              className="form-control"
              value={amount}
              name="amount"
              maxLength={10}
              placeholder="Enter amount"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">invoiceNo</label>
            <input
              type="text"
              className="form-control"
              value={invoiceNo}
              name="invoiceNo"
              maxLength={10}
              placeholder="Enter invoiceNo"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">payType</label>
            <input
              type="text"
              className="form-control"
              value={payType}
              name="payType"
              maxLength={10}
              placeholder="Enter payType"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">callBackUrl</label>
            <input
              type="text"
              className="form-control"
              value={callBackUrl}
              name="callBackUrl"
              maxLength={100}
              placeholder="Enter payType"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">goodsNm: ten san pham</label>
            <input
              type="text"
              className="form-control"
              value={goodsNm}
              name="goodsNm"
              maxLength={100}
              placeholder="Enter goodsNm: ten san pham "
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">notiUrl</label>
            <input
              type="text"
              className="form-control"
              value={notiUrl}
              name="notiUrl"
              maxLength={100}
              placeholder="notiUrl "
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">reqDomain</label>
            <input
              type="text"
              className="form-control"
              value={reqDomain}
              name="reqDomain"
              maxLength={100}
              placeholder="reqDomain"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">merchantToken</label>
            <input
              type="text"
              className="form-control"
              value={merchantToken}
              name="merchantToken"
              maxLength={100}
              placeholder="merchantToken"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Description</label>
            <input
              type="text"
              className="form-control"
              value={description}
              name="description"
              maxLength={100}
              placeholder="Mô tả"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">userLanguage</label>
            <input
              type="text"
              className="form-control"
              value={userLanguage}
              name="userLanguage"
              maxLength={100}
              placeholder="userLanguage"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">timeStamp</label>
            <input
              type="text"
              className="form-control"
              value={timeStamp}
              name="timeStamp"
              maxLength={100}
              placeholder="timeStamp"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">merTrxId</label>
            <input
              type="text"
              className="form-control"
              value={merTrxId}
              name="merTrxId"
              maxLength={100}
              placeholder="merTrxId"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">windowColor</label>
            <input
              type="text"
              className="form-control"
              value={windowColor}
              name="windowColor"
              maxLength={7}
              placeholder="windowColor"
              onChange={handleChangeInput}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">windowType</label>
            <input
              type="number"
              className="form-control"
              value={windowType}
              name="windowType"
              maxLength={1}
              placeholder="windowType"
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => openPayment(1, "https://sandbox.megapay.vn:2810")}>
            Thanh toán
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
