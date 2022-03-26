import React from "react";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import visaIcon from "../../../asset/images/svg/visa.svg";
import mastercardIcon from "../../../asset/images/svg/mastercard.svg";
import phonePe from "../../../asset/images/svg/phonepe.svg";
import google from "../../../asset/images/svg/google-pay.svg";
import paytm from "../../../asset/images/svg/paytm.svg";
import bhim from "../../../asset/images/svg/bhim.svg";
import mobikwik from "../../../asset/images/svg/mobikwik.svg";
import sbipay from "../../../asset/images/svg/sbi-pay.svg";
import axisBank from "../../../asset/images/svg/axis-bank.svg";
import paypal from "../../../asset/images/svg/paypal.svg";

function Payment() {
  const upiModes = [
    phonePe,
    google,
    paytm,
    bhim,
    mobikwik,
    sbipay,
    axisBank,
    paypal,
  ];
  function cardClicked(e) {
    // e.target.classList.toggle("active");
  }

  return (
    <PaymentContainer>
      <p className="title">Payment method</p>
      <p className="subtitle">Update your billing details and address.</p>
      <div className="container">
        <div className="key">
          <p className="container-title">Contact email</p>
          <p className="container-subtitle">where should invoices be sent?</p>
        </div>
        <div className="value">
          {/* <input placeholder="Enter your email" type="email" id="user-name" /> */}

          <input name="email-preference" id="my-email" type={"radio"} />
          <label for="my-email">Send to my account email</label>
          <p className="email">oliva@gamil.com</p>
          <input name="email-preference" id="send-to-email" type={"radio"} />
          <label for="send-to-email">Send to an alternative email</label>
          <div className="email-input-container">
            <p>
              <MdEmail />
            </p>
            <input
              className="email-input"
              type={"email"}
              placeholder="Enter your alternative email"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="key">
          <p className="container-title">Card Details</p>
          <p className="container-subtitle">Select default payment method.</p>
        </div>
        <div className="value">
          <div className="card" onClick={cardClicked}>
            <p className="img-container">
              <img src={visaIcon} alt="" />
            </p>
            <label for="card">
              <input name="select-card" id="card" type={"radio"} />
              <div className="content">
                <p className="card-title">visa ending in 1234</p>
                <p className="card-expiry">Expiry 06/2024</p>
                <div className="default-edit">
                  <p className="make-default">Set as default</p>
                  <p className="edit">Edit</p>
                </div>
              </div>
            </label>
          </div>
          <div className="card" onClick={cardClicked}>
            <p className="img-container">
              <img src={mastercardIcon} alt="" />
            </p>
            <label for="card">
              <input name="select-card" id="card" type={"radio"} />
              <div className="content">
                <p className="card-title">visa ending in 1234</p>
                <p className="card-expiry">Expiry 06/2024</p>
                <div className="default-edit">
                  <p className="make-default">Set as default</p>
                  <p className="edit">Edit</p>
                </div>
              </div>
            </label>
          </div>
          <p className="new-method">+ Add new payment method</p>
        </div>
      </div>
      <div className="container">
        <div className="key">
          <p className="container-title">UPI App</p>
          <p className="container-subtitle">Select default payment method.</p>
        </div>
        <div className="value">
          {/* <UpiCard img={phonePe} title="PhonePe" /> */}
          <div className="upi-container">
            {upiModes.map((mode, index) => (
              <img src={mode} alt="" />
            ))}
          </div>
        </div>
      </div>
    </PaymentContainer>
  );
}

export default Payment;

const PaymentContainer = styled.div`
  color: white;
  padding: 30px;
  width: 90%;
  .title {
    font-size: 1.7rem;
    font-weight: bolder;
  }
  .subtitle {
    font-size: 1.1rem;
    font-weight: lighter;
    opacity: 0.8;
    margin-top: 0.4rem;
    border-bottom: 1px solid #655f5f;
    padding-bottom: 15px;
  }
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px 0 25px;
    border-bottom: 1px solid #655f5f;

    .container-title {
      font-size: 1.1rem;
      font-weight: bolder;
      margin-bottom: 0.4rem;
    }
    .key {
      width: 30%;
    }
    .value {
      width: 70%;
      input {
        margin-right: 10px;
        transform: scale(1.5);
      }
      label {
        font-size: 1.1rem;
        font-weight: bolder;
        opacity: 0.8;
      }
      .email {
        margin-top: 0.3rem;

        margin-left: 20px;
        opacity: 0.6;
      }
      #send-to-email {
        margin-top: 30px;
      }
      .email-input-container {
        margin-left: 90px;
        margin-top: 20px;
        position: relative;

        p {
          position: absolute;
          left: -70px;
          font-size: 2.4rem;
          top: -4px;
          opacity: 0.7;
        }
      }
      .email-input {
        background-color: transparent;
        outline: none;
        border: none;
        border: 1px solid #ffffff;
        padding: 8px 30px 8px 35px;
        border-radius: 5px;
        color: #ffffff;
        width: 250px;
      }
      .card {
        display: flex;
        position: relative;
        width: 70%;
        padding: 20px 20px;
        // border: 1px solid #0075ff;
        border-radius: 10px;
        margin-bottom: 20px;
        border: 1px solid #757575;
        #card {
          position: absolute;
          top: 20px;
          right: 10px;
        }
        .img-container {
          background-color: #ffffff;
          padding: 8px 8px;
          border-radius: 10px;
          height: fit-content;
        }

        img {
          max-width: 50px;
          min-width: 50px;
        }
        .content {
          margin-left: 20px;
          .card-title {
            font-size: 1.1rem;
            font-weight: bolder;
            margin-bottom: 0.4rem;
            opacity: 0.9;
          }
          .default-edit {
            display: flex;
            gap: 30px;
            margin-top: 20px;
            p {
              cursor: pointer;
            }
          }
          .card-expiry {
            opacity: 0.8;
            font-weight: lighter;
            font-size: 1rem;
          }
        }
      }
      .new-method {
        opacity: 0.8;
        cursor: pointer;
      }
      .upi-container {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
      }
    }
  }
`;
