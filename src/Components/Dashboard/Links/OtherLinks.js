import React from "react";
import styled from "styled-components";

function OtherLinks() {
  const Link = ({ title }) => {
    return (
      <LinkContainer>
        <p className="title">{title}</p>
        <p className="coming-soon">Coming soon</p>
      </LinkContainer>
    );
  };
  return (
    <OtherLinksContainer>
      <p className="title">Other Tools</p>
      <p className="subtitle">Upcoming project</p>
      <Link title="Branded Links" />
      <Link title="Branded Links" />
      <Link title="Deet Links" />
      <Link title="Form Links" />
    </OtherLinksContainer>
  );
}

export default OtherLinks;

const OtherLinksContainer = styled.div`
  margin: 100px 0;
  color: white;
  .title {
    font-size: 20px;
    font-weight: bolder;
  }
  .subtitle {
    font-size: 16px;
    margin: 8px 0 0 0;
    opacity: 0.8;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  background: linear-gradient(
    112.83deg,
    rgba(6, 11, 40, 0.94) 0%,
    rgba(10, 14, 35, 0.62) 110.84%
  );
  box-shadow: 0px 2px 5.5px rgba(0, 0, 0, 0.02);
  padding: 30px 20px;
  width: 95%;
  margin: 20px 0;
  border-radius: 20px;
  .title {
    font-size: 28px;
    font-weight: bolder;
    opacity: 0.9;
  }
  .coming-soon {
    margin: auto 0;
    margin-left: 20px;
    height: 100%;
    background-color: #0075ff;
    border-radius: 25px;
    padding: 5px 20px;
    font-size: 10px;
  }
`;
