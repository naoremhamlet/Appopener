import React from "react";
import styled from "styled-components";
import video1 from "../../../asset/images/svg/video1.svg";
import video2 from "../../../asset/images/svg/video2.svg";
import video3 from "../../../asset/images/svg/video3.svg";
import video4 from "../../../asset/images/svg/video4.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

function Videos() {
  const data = [
    { title: "Use of Analytics", img: video1 },
    { title: "Use of branded link", img: video2 },
    { title: "Use of choice link", img: video3 },
    { title: "Use of From link", img: video4 },
  ];
  const Video = ({ title, img }) => {
    return (
      <VideoContainer>
        <img src={img} alt="" />
        <p className="title">{title}</p>
      </VideoContainer>
    );
  };
  return (
    <VideosContainer>
      <p className="title">Videos</p>
      <p className="subtitle">Learn from videos</p>
      <Swiper
        slidesPerView={4}
        // breakpoints={breakpoints}
      >
        {data.map((e) => (
          <SwiperSlide>
            <Video title={e.title} img={e.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </VideosContainer>
  );
}
export default Videos;

const VideosContainer = styled.div`
  color: white;
  margin: 100px 0;
  .title {
    font-size: 20px;
    font-weight: bolder;
  }
  .subtitle {
    font-size: 16px;
    margin: 8px 0 0 0;
    opacity: 0.8;
    margin-bottom: 50px;
  }
`;
const VideoContainer = styled.div`
  img {
    width: 318px;
    height: 318px;
    border-radius: 20px;
  }
  .title {
    font-size: 17px;
    font-weight: bolder;
    opacity: 0.9;
    margin-top: 15px;
    margin-left: 10px;
  }
`;
