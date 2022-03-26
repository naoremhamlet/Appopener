import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dashhomebg from "../../asset/images/svg/background.svg";
import linksbg from "../../asset/images/svg/home-background.svg";
import analyticsbg from "../../asset/images/svg/analyticsbg.svg";

import Sidebar from "./Sidebar";
import Profile from "./Profile";
import DashboardHeader from "./DashboardHeader";
import DashHome from "./DashHome/DashHome";
import Links from "./Links/Links";
import Analytics from "./Analytics/Analytics";
import AnalyticsDashboard from "./Analytics/AnalyticDashboard";
import DomainDashboard from "./Domain/DomainDashboard";
import CheckOut from "./CheckOut/CheckOut";
import Settings from "./Settings/Settings";

const bg = {
  dashhome: dashhomebg,
  links: linksbg,
  analytics: analyticsbg,
  domain: analyticsbg,
  checkout: analyticsbg,
  domainDash: analyticsbg,
  settings: linksbg,
};

function Dashboard({ user }) {
  const [element, setElement] = useState("dashhome");
  const [background, setbackground] = useState(bg["dashhome"]);

  useEffect(() => {
    setbackground(bg[element]);
  }, [element]);

  return (
    <DashboardContainer bg={background}>
      <Sidebar setElement={setElement} />
      <DashboardBody>
        <DashboardHeader setElement={setElement} />
        {(element === "dashhome" || element === "links") && (
          <Profile user={user} setElement={setElement} />
        )}

        {element === "dashhome" && <DashHome />}
        {element === "links" && <Links user={user} />}
        {element === "checkout" && <CheckOut setElement={setElement} />}
        {element === "domain" && <DomainDashboard user={user} setElement={setElement} />}
        {/* {element === "analytics" && <Analytics />} */}
        {element === "settings" && <Settings />}
      </DashboardBody>
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  background: url(${(props) => props.bg}) 0% 0% / cover;
  width: 100%;
`;
const DashboardBody = styled.div`
  width: 82%;
  padding: 40px 30px 30px;
  margin-left: 14%;
`;
const WelcomeAndInfo = styled.div`
  display: flex;
  margin-top: 30px;
  height: 377px;
`;
const PlattformAndProject = styled.div`
  display: flex;
  margin-top: 30px;
`;
export default Dashboard;
