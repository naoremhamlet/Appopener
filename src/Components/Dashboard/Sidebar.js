import React, { useState } from "react";
import styled from "styled-components";
import ProfileIcon from "../../asset/images/ProfileIcon";
import VerifyIcon from "../../asset/images/VerifyIcon";
import AvatarLogo from "../../asset/images/AvatarLogo";
import DomainIcon from "../../asset/images/DomainIcon";
import LinkIcon from "../../asset/images/LinkIcon";
// import TransferIcon from "../../../../asset/images/TransferIcon";
import SellDomainIcon from "../../asset/images/SellDomainIcon";
import horizontalLine from "../../asset/images/svg/horizontal-line.svg";
import needHelpBg from "../../asset/images/svg/need-help.svg";
import needHelpIcon from "../../asset/images/svg/help-icon.svg";
import { AiFillCaretDown } from "react-icons/ai";
// import { Link } from "react-router-dom";
import logo from "../../asset/images/svg/logo.svg";
import ComingSoon from '../../asset/images/svg/coming-soon.svg'

function Sidebar({ setElement }) {
  console.log(setElement)
  const [active, setActive] = useState("home");
  const [dropDown, setdropDown] = useState(true);
  function dropDownHandle() {
    setdropDown(!dropDown);
  }
  return (
    <SidebarContainer>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
      <img className="horizontal-line" src={horizontalLine} alt={""} />
      <Manage dropDown={dropDown}>
        <p className="title">MANAGE</p>
        <ul>
          <SidebarItems
            active={active}
            current={"home"}
            onClick={() => {
              setElement("dashhome");
              setActive("home");
            }}
          >
            <span>
              <ProfileIcon color={active === "home" ? "white" : "#0075FF"} />
            </span>
            <p>Home</p>
          </SidebarItems>
          <SidebarItems
            active={active}
            current={"links"}
            onClick={() => {
              setElement("links");
              setActive("links");
            }}
          >
            <span>
              <LinkIcon color={active === "links" ? "white" : "#0075FF"} />
            </span>
            <p>Links</p>
          </SidebarItems>


          <SidebarItems
            active={active}
            current={"domain"}
            dropDown={dropDown}
            onClick={() => {
              dropDownHandle();
              setElement("domain");
              setActive("domain");
            }}
          >
            <span>
              <DomainIcon color={active === "domain" ? "white" : "#0075FF"} />
            </span>
            <p>
              Domain
              {/* <AiFillCaretDown className="down-arrow" /> */}
            </p>
          </SidebarItems>
          {/* <div className="drop-down">
            <SidebarItems
              active={active}
              current={"dashboard"}
              onClick={() => {
                setActive("dashboard");
                setElement("domain");
              }}
            >
              <span>
                <ProfileIcon
                  color={active === "dashboard" ? "white" : "#0075FF"}
                />
              </span>
              <p>Dashboard</p>
            </SidebarItems>

            <SidebarItems
              active={active}
              current={"markplace"}
              onClick={() => {
                setActive("markplace");
              }}
            >
              <span>
                <SellDomainIcon
                  color={active === "markplace" ? "white" : "#0075FF"}
                />
              </span>
              <p>MarketPlace</p>
            </SidebarItems>
          </div> */}
          <SidebarItems
            active={active}
            current={"analytics"}
            onClick={() => {
              // setElement("analytics");
              // setActive("analytics");
            }}
          >
            <span>
              <AvatarLogo
                color={active === "analytics" ? "white" : "#0075FF"}
              />
            </span>
            <p>Analytics <img src={ComingSoon} width={20} /></p>
          </SidebarItems>
          
          <SidebarItems
            active={active}
            current={"creator-collage"}
            onClick={() => {
              // setActive("creator-collage");
            }}
          >
            <span>
              <VerifyIcon
                color={active === "creator-collage" ? "white" : "#0075FF"}
              />
            </span>
            <p>Creators Collage <img src={ComingSoon} width={20} /></p>
          </SidebarItems>
          <SidebarItems
            active={active}
            current={"settings"}
            onClick={() => {
              setActive("settings");
              setElement("settings");
            }}
          >
            <span>
              <AvatarLogo color={active === "settings" ? "white" : "#0075FF"} />
            </span>
            <p>Settings</p>
          </SidebarItems>
        </ul>
      </Manage>
      <Resources>
        <p className="title">Resources</p>
        <p className="links">How to sell the Domain</p>
      </Resources>
      <HelpContainer bg={needHelpBg}>
        <img src={needHelpIcon} alt="" />

        <p className="bold">Need Help?</p>
        <p>Please check our docs</p>
        <p className="documentation-button">DOCUMENTATION</p>
      </HelpContainer>
    </SidebarContainer>
  );
}
export default Sidebar;

const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  z-index: 10;
  width: 13%;
  color: white;
  padding: 40px 20px 30px 10px;
  background: linear-gradient(
    111.84deg,
    rgba(6, 11, 38, 0.94) 0.3%,
    rgba(26, 31, 55, 0) 100%
  );
  background-color: #0d112c;
  height: 93%;
  border-radius: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  .horizontal-line {
    margin-top: 25px;
    max-width: 100%;
  }
  .title {
    font-weight: bolder;
    font-size: 13px;
    opacity: 0.8;
    margin-left: 20px;
  }
`;
const Logo = styled.div`
  text-align: center;
  font-size: 15px;
  opacity: 0.95;
  img {
    width: 40px;
  }
`;
const Manage = styled.div`
  margin-top: 15px;
  .title {
    margin-bottom: 15px;
  }
  ul {
    list-style: none;
    font-size: 15px;
    .drop-down {
      margin-left: 20px;
      display: ${(props) => (props.dropDown ? "block" : "none")};
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
const SidebarItems = styled.li`
  cursor: pointer;
  padding: 10px 12px;
  border-radius: 15px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  span {
    opacity: 0.9;
    margin-left: 10px;
  }
  background-color: ${(props) =>
    props.active === props.current ? "#1a1f37" : "transparent"};
  span {
    padding: 8px;
    color: white;
    border-radius: 12px;
    box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
    background-color: ${(props) =>
      props.active === props.current ? "#0075ff" : "#1a1f37"};
    display: inline-block;
    margin-right: 10px;
    min-width: 15px;
    text-align: center;
  }
  p {
    font-size: 14px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .down-arrow {
    margin-left: 10px;
    height: 100%;
    vertical-align: middle;
    transform: ${(props) =>
      props.dropDown ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;
const Resources = styled.div`
  .title {
    margin: 20px 20px 15px;
  }
  .links {
    margin-left: 20px;
    font-size: 13px;
    color: #0c40a2;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  margin-bottom: auto;
`;
const HelpContainer = styled.div`
  background: url(${(props) => props.bg}) no-repeat center;
  width: 206.86px;
  height: 160.84px;
  position: absolute;
  bottom: 20px;
  left: 20px;

  img {
    margin: 20px 0px 15px 20px;
  }
  p {
    margin-left: 20px;
    line-height: 1.2;
  }
  .bold {
    font-weight: bolder;
  }
  .documentation-button {
    text-align: center;
    padding: 8px 5px;
    background: linear-gradient(
      126.97deg,
      rgba(6, 11, 40, 0.74) 28.26%,
      rgba(10, 14, 35, 0.71) 91.2%
    );
    border-radius: 10px;
    font-size: 13px;
    margin-top: 8px;
    cursor: pointer;
    font-weight: bolder;
  }
`;
