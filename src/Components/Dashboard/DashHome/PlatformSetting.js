import React, { useState } from "react";
import styled from "styled-components";

function PlattformSetting() {
  const accountData = [
    "Email me when someone follows me",
    "Email me when someone answers on my post",
    "Email me when someone mentions me",
  ];
  const appData = [
    "New launches and projects",
    "Monthly product updates",
    "Subscribe to newsletter",
  ];
  const [accountToggle, setAccountToggle] = useState(
    accountData.map((e) => false)
  );
  const [applicationToggle, setApplicationToggle] = useState(
    accountData.map((e) => false)
  );

  const ChecklistElement = ({ text, index, isAccount }) => (
    <div className="element">
      <label class="switch">
        <input
          type="checkbox"
          onChange={() => handleToggle(index, isAccount)}
          checked={isAccount ? accountToggle[index] : applicationToggle[index]}
        />
        <span class="slider"></span>
      </label>
      <p>{text}</p>
    </div>
  );

  function handleToggle(index, isAccount) {
    console.log({ accountToggle, applicationToggle });
    const newToggleValue = isAccount
      ? [...accountToggle]
      : [...applicationToggle];
    newToggleValue[index] = !newToggleValue[index];
    if (isAccount) {
      setAccountToggle(newToggleValue);
    } else {
      setApplicationToggle(newToggleValue);
    }
  }
  return (
    <PlattformSettingContainer>
      <p className="title">Platform Settings</p>
      <div className="account">
        <p className="subtitle">ACCOUNT</p>
        {accountData.map((e, i) => (
          <ChecklistElement text={e} index={i} isAccount={true} />
        ))}
      </div>
      <div className="application">
        <p className="subtitle">APPLICATION</p>

        {appData.map((e, i) => (
          <ChecklistElement text={e} index={i} isAccount={false} />
        ))}
      </div>
    </PlattformSettingContainer>
  );
}
export default PlattformSetting;

const PlattformSettingContainer = styled.div`
  background: linear-gradient(
    127.09deg,
    rgba(6, 11, 40, 0.94) 19.41%,
    rgba(10, 14, 35, 0.49) 76.65%
  );
  width: 328px;
  border-radius: 20px;
  padding: 30px 20px;
  color: white;
  .account,
  .application {
    margin-top: 40px;
  }
  .title {
    font-size: 20px;
    font-weight: bolder;
  }
  .subtitle {
    font-size: 12px;
    opacity: 0.8;
  }
  .element {
    display: flex;
    margin-top: 22px;

    .toggle {
      margin-right: 15px;
    }

    p {
      opacity: 0.8;
      font-size: 15px;
    }
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    margin-right: 10px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #1b1f3d;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 25px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #0075ff;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #0075ff;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }
`;
