import React from "react";
import styled from "styled-components";
import logo1 from "../../../asset/images/svg/appopennerLogo.svg";
import logo2 from "../../../asset/images/svg/logo.svg";

function GenerateLinks() {
  return (
    <GenerateLinksContainer>
      <p className="title">Generate Links</p>
      <p className="subtitle">ACCOUNT</p>
      <div className="container">
        <div className="logo-img">
          <img src={logo1} alt="" />
          <p>App Opener</p>
        </div>
        <div className="logo-img">
          <img src={logo2} alt="" />
          <p>Branded Link</p>
        </div>
        <div className="logo-img">
          <img src={logo2} alt="" />
          <p>Deet Links</p>
        </div>
        <div className="logo-img">
          <img src={logo2} alt="" />
          <p>Form Links</p>
        </div>
      </div>
    </GenerateLinksContainer>
  );
}
export default GenerateLinks;

const GenerateLinksContainer = styled.div`
  color: #fff;
  background: linear-gradient(
    127.09deg,
    rgba(6, 11, 40, 0.94) 19.41%,
    rgba(10, 14, 35, 0.49) 76.65%
  );
  border-radius: 20px;
  padding: 30px 20px;
  width: 328px;
  .title {
    font-size: 20px;
    font-weight: bolder;
  }
  .subtitle {
    font-size: 12px;
    opacity: 0.6;
    margin-top: 40px;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 20px;
    width: 80%;
    margin: 0 auto;
    .logo-img {
      margin: 20px;
      text-align: center;
    }
    img {
      margin-bottom: 10px;
    }
  }
`;
