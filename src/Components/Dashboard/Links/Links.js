import React from "react";
import styled from "styled-components";
import astronautImg from "../../../asset/images/svg/astronaut.png";
import GenerateLink from "./GenerateLink";
import UrlTable from "./UrlTable";
import Videos from "./Videos";
import OtherLinks from "./OtherLinks";

function Links({user}) {
  return (
    <>
      <CardsHolder>
        <GenerateLink user={user} />
        <img className="astronut-2" src={astronautImg} alt="" />
      </CardsHolder>
      <UrlTable user={user} />
      <OtherLinks />
      <Videos />
    </>
  );
}
export default Links;

// const HomeContainer = styled.div`
//   display: flex;
//   background-color: #12122c;
//   width: 100%;
//   overflow: hidden;
// `;
// const HomeBody = styled.div`
//   width: 87%;
//   padding: 40px 30px 30px;
//   margin-left: 14%;
// `;
const CardsHolder = styled.div`
  display: flex;
  margin-top: 30px;
  height: 377px;

  .astronut {
    margin: 20px 0;
    margin-right: 40px;
  }
  .astronut-2 {
    transform: scaleX(-1);
    margin: 20px 0 20px auto;
  }
`;
