import React from "react";
import styled from "styled-components";
import ProjectCard1 from "../../../asset/images/svg/project1.svg";
import ProjectCard2 from "../../../asset/images/svg/project2.svg";
import ProjectCard3 from "../../../asset/images/svg/project3.svg";

function Projects() {
  const cardData = [
    {
      img: ProjectCard3,
      title: "Travel",
      smallTitle: "Project#1",
      subTitle:
        "As Uber works through a huge amount of internal management turmoil.",
    },
    {
      img: ProjectCard1,
      title: "Fashion",
      smallTitle: "Project#2",
      subTitle:
        "Music is something that every person has his or her own specific opinion about.",
    },
    {
      img: ProjectCard2,
      title: "Equipment",
      smallTitle: "Project#3",
      subTitle:
        "Different people have different taste, and various types of music.",
    },
  ];
  const ProjectCard = ({ data }) => {
    return (
      <Card>
        <img src={data.img} alt="" />
        <div className="card-details">
          <p className="small-title">{data.smallTitle}</p>
          <p className="card-title">{data.title}</p>
          <p className="subtitle">{data.subTitle}</p>
          <p className="view-button">VIEW ALL</p>
        </div>
      </Card>
    );
  };
  return (
    <ProjectsContainer>
      <p className="title">Get Spawnsered</p>
      <p className="subtitle">Get Spawnsered of all the things</p>
      <div className="card-container">
        {cardData.map((data, index) => (
          <ProjectCard key={index} data={data} />
        ))}
      </div>
    </ProjectsContainer>
  );
}
export default Projects;

const ProjectsContainer = styled.div`
  flex: 3.6;
  background: linear-gradient(
    127.09deg,
    rgba(6, 11, 40, 0.94) 19.41%,
    rgba(10, 14, 35, 0.49) 76.65%
  );
  color: white;
  margin: 0 0 0 25px;
  border-radius: 20px;

  .title {
    font-size: 20px;
    font-weight: bolder;
    margin: 30px 0 0 30px;
  }
  .subtitle {
    font-size: 16px;
    margin: 8px 0 0 30px;
    opacity: 0.7;
  }
  .card-container {
    margin: 30px 0 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
const Card = styled.div`
  width: 355px;
  height: 353px;
  margin-bottom: 30px;
  img {
    width: 100%;
    border-radius: 10px;
  }
  .card-details {
    padding: 10px;
  }
  .small-title {
    font-weight: normal;
    font-size: 11px;
    line-height: 150%;
    opacity: 0.5;
    margin: 2px 0;
  }
  .card-title {
    font-size: 18px;
    font-weight: bolder;
  }
  .subtitle {
    margin: 10px 0 20px 0;
    font-size: 15px;
    opacity: 0.6;
  }
  .view-button {
    border: 1px solid #fff;
    width: fit-content;
    padding: 10px 32px;
    border-radius: 10px;
    font-size: 11px;
    opacity: 0.9;
    font-weight: bold;
    cursor: pointer;

    :hover {
      background: #fff;
      color: #000;
    }
  }
`;
