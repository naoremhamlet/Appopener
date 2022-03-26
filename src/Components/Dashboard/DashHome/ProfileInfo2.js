import React from "react";
import styled from "styled-components";
import horizontalLine from "../../../asset/images/svg/horizontal-line.svg";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function ProfileInfo2() {
  return (
    <ProfileInfo2Container>
      <p className="title">Profile Informations</p>
      <p className="subtitle">
        Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is no.
        If two equally difficult paths, choose the one more painful in the short
        term (pain avoidance is creating an illusion of equality).
      </p>
      <img className="horizontal-line" src={horizontalLine} alt={""} />
      <Details>
        <p>
          <span className="details-key">Full Name:</span> Mark Johnson
        </p>
        <p>
          <span className="details-key">Mobile:</span> (44) 123 1234 123
        </p>
        <p>
          <span className="details-key">Email:</span> mark@simmmple.com
        </p>
        <p>
          <span className="details-key">Location:</span> India
        </p>
        <p>
          <span className="details-key">Social Media:</span>
          <span className="icon">
            <BsFacebook />
          </span>
          <span className="icon">
            <BsTwitter />
          </span>
          <span className="icon">
            <BsInstagram />
          </span>
        </p>
      </Details>
    </ProfileInfo2Container>
  );
}
export default ProfileInfo2;

const ProfileInfo2Container = styled.div`
  background: linear-gradient(
    127.09deg,
    rgba(6, 11, 40, 0.94) 19.41%,
    rgba(10, 14, 35, 0.49) 76.65%
  );
  flex: 1;
  max-height: 100%;
  border-radius: 20px;
  color: white;
  padding: 30px 20px;
  .title {
    font-size: 20px;
    font-weight: bolder;
  }
  .subtitle {
    font-size: 14px;
    margin-top: 10px;
    opacity: 0.65;
    line-height: 21px;
  }
  .horizontal-line {
    width: 100%;
    opacity: 0.8;
  }
`;
const Details = styled.div`
  margin-top: 30px;
  span {
    opacity: 0.7;
    margin-right: 10px;
  }
  p {
    margin: 15px 0;
    opacity: 0.95;
  }
  .icon {
    font-size: 12px;
    opacity: 0.95;
    margin-right: 15px;
    cursor: pointer;
  }
`;
