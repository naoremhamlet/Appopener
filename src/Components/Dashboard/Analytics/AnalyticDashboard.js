import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";
import bg from "../../../asset/images/svg/analytic-dashboardbg.svg";
import insta from "../../../asset/images/svg/instagram.svg";
import graph from "../../../asset/images/svg/anakytic-graph.svg";
import card1 from "../../../asset/images/svg/small-card1.svg";
import card2 from "../../../asset/images/svg/small-card2.svg";
import card3 from "../../../asset/images/svg/small-card3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

function AnalyticsDashboard() {
  return (
    <AnalyticsDashboardContainer bg={bg}>
      {/* <Sidebar /> */}
      <AnalyticsDashboardBody>
        <div className="inner-container">
          <p className="title">Detail Analytics</p>
          <CurrentSocial>
            <img src={insta} alt="" />
            <p>Instagram</p>
          </CurrentSocial>
          <AccountInsight>
            <p className="subtitle">Account Insight</p>
            <img src={graph} alt="" />
          </AccountInsight>
          <ContentYouShared>
            <p className="subtitle">Content You Shared</p>

            <div className="card-container">
              <p className="sub-subtitle">Post</p>
              <Swiper
                slidesPerView={8}
                // breakpoints={breakpoints}
              >
                <SwiperSlide>
                  <img src={card1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card3} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="card-container">
              <p className="sub-subtitle">Stories</p>
              <Swiper
                slidesPerView={8}
                // breakpoints={breakpoints}
              >
                <SwiperSlide>
                  <img src={card1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card3} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </ContentYouShared>
        </div>
      </AnalyticsDashboardBody>
    </AnalyticsDashboardContainer>
  );
}
export default AnalyticsDashboard;

const AnalyticsDashboardContainer = styled.div`
  display: flex;
  background-image: url(${(props) => props.bg});
  background-size: inherit;
  background-position-y: 20%;
  width: 100%;
  color: white;
  margin-top: 25px;
  border-radius: 20px;
`;
const AnalyticsDashboardBody = styled.div`
  width: 100%;
  margin-bottom: 30px;

  .inner-container {
    background-color: #20243c;
    width: 92%;
    height: 90%;
    margin: auto;
    margin-top: 50px;
    border-radius: 20px;
    padding: 30px 20px;

    .title {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 100%;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
`;
const CurrentSocial = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  p {
    margin-left: 20px;
  }
`;
const AccountInsight = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #ffffff;
    margin-bottom: 15px;
  }
  img {
    width: 98%;
  }
`;
const ContentYouShared = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #ffffff;
    margin-bottom: 15px;
  }
  .sub-subtitle {
    font-size: 18px;
  }
  .card-container {
    margin-top: 20px;
  }
`;
