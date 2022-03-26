import React, { useEffect, useState } from "react";
import styled from "styled-components";
import backgroundimg from "../../../asset/images/svg/analyticsbg.svg";
import rocket from "../../../asset/images/svg/rocket.svg";
import instagram3d from "../../../asset/images/svg/instagram-3d.svg";
import youtube3d from "../../../asset/images/svg/youtube-3d.svg";

import axios from "axios";

// import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const API_ROUTE = process.env.REACT_APP_API_ROUTE;


function Gauge ({fillColor, percentage, logo, name, metric}) {
  return (
    <GaugeContainer>
      <div class="gauge__body">
        <div
          class="gauge__fill"
          style={{
            background: fillColor,
            transform: `rotate(${percentage / 2}turn)`,
          }}
        ></div>
        <div class="gauge__cover">
          <div className="content">
            <img src={logo} alt="logo" />
            <p className="name">{name}</p>
            <p className="metric">{metric}</p>
            <p className="view-more">View More</p>
          </div>
        </div>
      </div>
    </GaugeContainer>
  );
}


function Analytics() {

  const [loading, setLoading] = useState();
  const [instagram, setInstagram] = useState();
  const [youtube, setYoutube] = useState();

  useEffect(() => {

    axios.get()

  }, [])

  function setGaugeValue(gauge, value) {
    if (value < 0 || value > 1) {
      return;
    }

    gauge.querySelector(".gauge__fill").style.transform = `rotate(${
      value / 2
    }turn)`;
    // gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    //   value * 100
    // )}%`;
  }

  return (
    <AnalyticsContainer bg={backgroundimg}>
      <AnalyticsBody>
        {<img className="bg" src={rocket} alt="" />}
        <p className="title">Analytics Dashboard</p>
        <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
          <Gauge
            fillColor={"#b03199"}
            percentage={0.3}
            logo={instagram3d}
            metric={"22M"}
            name={"Instagram"}
          />
          <Gauge
            fillColor={"#b03199"}
            percentage={0.3}
            logo={youtube3d}
            metric={"22M"}
            name={"Youtube"}
          />
        </div>
      </AnalyticsBody>
    </AnalyticsContainer>
  );
}

export default Analytics;

const AnalyticsContainer = styled.div`
  display: flex;
  background: url(${(props) => props.bg}) 0% 0% / cover;
  width: 100%;
  height: 110vh;
`;
const AnalyticsBody = styled.div`
  // width: 87%;
  // margin-left: 14%;
  width: 100%;
  color: white;

  .bg {
    position: absolute;
    bottom: 0;
    left: 45%;
    max-width: 400px;
  }
  .title {
    font-size: 1.7rem;
    font-weight: bold;
    color: #fff;
    margin-top: 20px;
    text-align: center;
  }

  // --------------- Gauge ---------------
`;
const GaugeContainer = styled.div`
  width: 100%;
  max-width: 350px;
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  color: #004033;

  .gauge__body {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    background: #b4c0be;
    position: relative;
    border-top-left-radius: 100% 200%;
    border-top-right-radius: 100% 200%;
    overflow: hidden;
    position: relative;
  }

  .gauge__fill {
    position: absolute;
    top: 100%;
    left: 0;
    width: inherit;
    height: 100%;
    // background: #b03199;
    transform-origin: center top;
    transform: rotate(0.25turn);
    transition: transform 0.2s ease-out;
  }

  .gauge__cover {
    color: white;
    width: 90%;
    height: 180%;
    background: #121c42;
    border-radius: 50%;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);

    /* Text */
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 25%;
    box-sizing: border-box;

    .content {
      position: absolute;
      top: 20px;
      width: 100%;
      text-align: center;
      img {
        width: 50px;
      }
      .metric {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 10px 0;
      }
      .view-more {
        font-size: 0.8rem;
      }
    }
  }
`;
