import React, { useState } from "react";
import styled from "styled-components";
import downloadIcon from "../../../asset/images/svg/download.svg";
function Transaction() {
  return (
    <TransactionContainer>
      <p className="title">Transaction</p>
      <p className="subtitle">View your billing details and address.</p>
      <div className="download">
        <img src={downloadIcon} alt="" />
        <p>Download All</p>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <input type={"checkbox"} />
                Invoice
              </th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input className="checkbox" type={"checkbox"} />
                Basic Plan - Dec 2022
              </td>
              <td>
                <p>$100</p>
              </td>
              <td>
                <p>Dec 1, 2022</p>
              </td>
              <td className="status-container">
                <p className="status">Paid</p>
              </td>
              <td>
                <img className="download-button" src={downloadIcon} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <input type={"checkbox"} />
                Basic Plan - Dec 2022
              </td>
              <td>
                <p>$100</p>
              </td>
              <td>
                <p>Dec 1, 2022</p>
              </td>
              <td className="status-container">
                <p className="status">Paid</p>
              </td>
              <td>
                <img className="download-button" src={downloadIcon} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <input type={"checkbox"} />
                Basic Plan - Dec 2022
              </td>
              <td>
                <p>$100</p>
              </td>
              <td>
                <p>Dec 1, 2022</p>
              </td>
              <td className="status-container">
                <p className="status">Paid</p>
              </td>
              <td>
                <img className="download-button" src={downloadIcon} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <input type={"checkbox"} />
                Basic Plan - Dec 2022
              </td>
              <td>
                <p>$100</p>
              </td>
              <td>
                <p>Dec 1, 2022</p>
              </td>
              <td className="status-container">
                <p className="status">Paid</p>
              </td>
              <td>
                <img className="download-button" src={downloadIcon} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <input type={"checkbox"} />
                Basic Plan - Dec 2022
              </td>
              <td>
                <p>$100</p>
              </td>
              <td>
                <p>Dec 1, 2022</p>
              </td>
              <td className="status-container">
                <p className="status">Paid</p>
              </td>
              <td>
                <img className="download-button" src={downloadIcon} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </TransactionContainer>
  );
}
export default Transaction;

const TransactionContainer = styled.div`
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
  .download {
    width: fit-content;
    margin-left: auto;
    padding: 10px 30px;
    background: #6a6c79;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
    border: 1px solid #ffffff;
    font-weight: bolder;
    opacity: 0.8;

    p {
      margin-left: 10px;
    }
  }
  .table-container {
    margin-top: 20px;

    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      // padding: 10px 50px;

      thead {
        background: #6a6d7b;
      }
      th,
      td {
        border-bottom: 1px solid #655f5f;
        font-size: 1.1rem;
        text-align: center;
        padding:20px 10px;
      }
      th:first-child,
      td:first-child {
        padding-left: 50px;
        text-align: left;

      }

      th {
        font-weight: bolder;
      }
  
      input {
        margin-right: 10px;
        width: 20px;
        height: 20px;
        // border: none;
        cursor: pointer;
      }
      .status{
        background: white;
        padding: 5px 40px;
        color:red;
        width: fit-content;
        border-radius: 20px;
        margin: auto;
      }
      .download-button{
        cursor:pointer;
      }
    
  }
`;
