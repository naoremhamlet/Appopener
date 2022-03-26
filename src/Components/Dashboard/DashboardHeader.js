import React from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import Logout from "../Home/Logout";

function DashboardHeader({user, setElement}) {
  return (
    <DashboardHeaderContainer>
      <NavbarLeft>
        <p>
          <span>Pages</span> / Profile
        </p>
        <p className="larger" onClick={() => setElement("settings")}>Profile</p>
      </NavbarLeft>
      <NavbarRight>
        {/* <div className="input-bar">
          <p>
            <AiOutlineSearch />
          </p>
          <input type={"text"} placeholder={"Type here..."}></input>
        </div> */}
        <div className="signin">
          <BsFillPersonFill onClick={() => setElement("settings")}/>
          <Logout />
        </div>
        <p>
          <AiTwotoneSetting onClick={() => setElement("settings")}/>
        </p>
        <p>
          <IoIosNotifications />
        </p>
      </NavbarRight>
    </DashboardHeaderContainer>
  );
}
export default DashboardHeader;
const DashboardHeaderContainer = styled.div`
  margin-left: 20px;
  color: white;
  display: flex;
`;
const NavbarLeft = styled.div`
  line-height: 1.5;
  opacity: 0.8;
  .larger {
    font-size: 16px;
    line-height: 1.9;
    font-weight: bolder;
  }
  P {
    font-size: 14px;
    span {
      opacity: 0.5;
    }
  }
`;
const NavbarRight = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  .input-bar {
    opacity: 0.8;
    input {
      border-radius: 12px;
      background-color: #021535;
      border: none;
      outline: none;
      padding: 10px 10px 10px 35px;
      border: 1px solid #4a4a4a;
      font-size: 14px;
      color: #c1c1c1;
      ::placeholder {
        color: #c1c1c1;
      }
    }
    p {
      position: relative;
      left: 40px;
      top: 4px;
      font-size: 20px;
      opacity: 0.5;
    }
  }
  p {
    display: inline-block;
    margin: 0 10px;
    justify-content: space-between;
    cursor: pointer;
    opacity: 0.7;
    transition: all 0.3s;
  }
  p:hover {
    transform: scale(1.1);
    opacity: 1;
  }
  .signin {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
    gap: 10px;
    opacity: 0.7;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  }
`;
