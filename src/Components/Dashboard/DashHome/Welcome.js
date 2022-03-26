import React from "react";
import styled from "styled-components";
import forwardArrow from "../../../asset/images/svg/forward-arrow.svg";

function Welcome({ bg }) {
  return (
    <WelcomeContainer bg={bg}>
      <p className="title">Welcome back!</p>
      <p className="sub-title">Nice to see you, Mark Johnson!</p>
      <p className="button">
        <span>Profile Dashboard</span> <img src={forwardArrow} alt="" />
      </p>
    </WelcomeContainer>
  );
}
export default Welcome;

const WelcomeContainer = styled.div`
  background: url(${(props) => props.bg}) no-repeat;
  background-size: cover;
  min-width: 368px;
  width: auto;
  height: 100%;
  border-radius: 13px;
  color: white;
  position: relative;
  margin: 0 25px 0 0px;
  .title {
    margin: 30px 0 0 30px;
    font-size: 25px;
    font-weight: bolder;
  }
  .sub-title {
    margin: 8px 0 0 30px;
  }

  .button {
    position: absolute;
    bottom: 50px;
    left: 30px;
    gap: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      padding-top: 5px;
    }
  }
`;
