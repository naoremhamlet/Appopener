import React, { useState } from "react";
import styled from "styled-components";
import batteryLogo from "../../../asset/images/svg/batteryhealth.svg";
import efficiencyLogo from "../../../asset/images/svg/efficiency.svg";
import consumptionLogo from "../../../asset/images/svg/consumption.svg";
import thisWeekLogo from "../../../asset/images/svg/thisweek.svg";
import thunderLogo from "../../../asset/images/svg/thunder.svg";

function ProfileInfo1({user}) {
  const [loadCirclePercentage, setLoadCirclePercentage] = useState(68);
  const boxesData = [
    {
      title: "Battery Health",
      value: "76%",
      icon: batteryLogo,
    },
    {
      title: "Efficiency",
      value: "120%",
      icon: efficiencyLogo,
    },
    {
      title: "Consumption",
      value: "163W/Km",
      icon: consumptionLogo,
    },
    {
      title: "This Week",
      value: "1.342Km",
      icon: thisWeekLogo,
    },
  ];
  const InfoBox = ({ title, icon, value }) => {
    return (
      <InfoBoxContainer>
        <div className="container">
          <div className="box-title">{title}</div>
          <div className="box-value">{value}</div>
        </div>
        <img src={icon} alt="" />
      </InfoBoxContainer>
    );
  };
  return (
    <ProfileInfo1Container>
      <p className="title">Profile Informations</p>
      <p className="subtitle">{user && user.name}</p>
      <div style={{ display: "flex" }}>
        <CurrentLoadCircle>
          <div className="circle-container">
            <div className="inside-circle">
              <div>
                <img src={thunderLogo} alt="" />
                <p className="value">{loadCirclePercentage}%</p>
                <p className="text">Current Load</p>
              </div>
            </div>
          </div>
          <div className="details">
            <p className="title">Check out our branded links</p>
            <p className="sub-title">Time to full charge</p>
          </div>
        </CurrentLoadCircle>
        <BoxContainer>
          {boxesData.map((box, index) => (
            <InfoBox
              key={index}
              title={box.title}
              value={box.value}
              icon={box.icon}
            />
          ))}
        </BoxContainer>
      </div>
    </ProfileInfo1Container>
  );
}
export default ProfileInfo1;

const ProfileInfo1Container = styled.div`
  background: linear-gradient(
    138.78deg,
    rgba(6, 11, 40, 0.94) 7.44%,
    rgba(10, 14, 35, 0.49) 95.55%,
    rgba(10, 14, 35, 0.69) 100.55%
  );
  border-radius: 20px;
  flex: 2;
  max-height: 100%;
  margin: 0 25px;
  color: white;
  padding: 30px;
  .title {
    font-size: 20px;
    font-weight: bolder;
  }
  .subtitle {
    font-size: 16px;
    margin: 8px 0 0 0;
    opacity: 0.9;
  }
`;
const CurrentLoadCircle = styled.div`
  margin-top: 15px;

  .inside-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    z-index: 100;
    position: relative;
    z-index: 100;
  }
  .circle-container {
    width: 171px;
    height: 171px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    border-radius: 50%;

    .value {
      font-size: 37px;
      font-weight: bolder;
      margin-bottom: 5px;
    }

    .text {
      opacity: 0.7;
      font-size: 13px;
    }
  }
  .details {
    text-align: center;
    margin-top: 20px;
    .title {
      font-size: 18px;
      font-weight: bolder;
    }
    .sub-title {
      font-size: 14px;
      opacity: 0.6;
    }
  }
`;
const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;
  margin-left: auto;
`;

const InfoBoxContainer = styled.div`
  color: white;
  display: flex;
  width: fit-content;
  padding: 20px;
  width: 190px;
  margin-top: 20px;
  justify-content: space-between;
  background: linear-gradient(
    126.97deg,
    rgba(6, 11, 38, 0.74) 28.26%,
    rgba(26, 31, 55, 0.5) 91.2%
  );
  border-radius: 20px;
  img {
    max-width: 80px;
  }
  .box-title {
    font-size: 13px;
    opacity: 0.7;
    margin-bottom: 5px;
  }
  .box-value {
    font-size: 20px;
    font-weight: bolder;
  }
`;
