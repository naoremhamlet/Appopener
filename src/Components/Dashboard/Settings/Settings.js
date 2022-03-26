import React, { useState } from "react";
import styled from "styled-components";
import Transaction from "./Transaction";
import Payment from "./Payment";
import Profile from "./Profile";
import Detail from "./Detail";
import Renewal from "./Renewal";

function Settings() {
  const [active, setActive] = useState("profile");
  return (
    <SettingsContainer>
      <NavBar>
        <p className="title">Settings</p>
        <p className="subtitle">Manage your profile and payment</p>
        <ul>
          <li
            className={active === "detail" && "active"}
            onClick={() => setActive("detail")}
          >
            My detail
          </li>
          <li
            onClick={() => {
              setActive("profile");
            }}
            className={active === "profile" && "active"}
          >
            Profile
          </li>
          <li
            className={active === "payment" && "active"}
            onClick={() => {
              setActive("payment");
            }}
          >
            Payment
          </li>
          <li
            className={active === "transaction" && "active"}
            onClick={() => {
              setActive("transaction");
            }}
          >
            Transaction
          </li>
          <li
            className={active === "renewal" && "active"}
            onClick={() => {
              setActive("renewal");
            }}
          >
            Renewal
          </li>
        </ul>
      </NavBar>
      {active === "detail" && <Detail />}
      {active === "profile" && <Profile />}
      {active === "payment" && <Payment />}
      {active === "transaction" && <Transaction />}
      {active === "renewal" && <Renewal />}
    </SettingsContainer>
  );
}
export default Settings;
const SettingsContainer = styled.div`
  color: white;
  padding-top: 30px;
`;
const NavBar = styled.div`
  .title {
    font-size: 2rem;
    font-weight: bolder;
    margin-left: 30px;
  }
  .subtitle {
    font-size: 1.1rem;
    font-weight: lighter;
    opacity: 0.8;
    margin-top: 0.3rem;
    margin-left: 30px;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 30px;
    font-size: 1.4rem;
    margin-top: 40px;
    margin-bottom: 20px;
    li {
      cursor: pointer;
      padding: 15px 33px;
      border-radius: 20px;
      font-weight: bolder;
    }

    .active {
      background: #1a1f37;
      color: #0075ff;
    }
  }
`;
