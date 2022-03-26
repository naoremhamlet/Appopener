import React from 'react';
import styled from "styled-components";
import Welcome from './Welcome';
import ProfileInfo1 from './ProfileInfo1';
import ProfileInfo2 from './ProfileInfo2';
import GenerateLinks from './GenerateLinks';
import Projects from './Projects';
import welcomeBg from "../../../asset/images/svg/welcome-back.png";


function DashHome(props) {
    return (
        <>
            <WelcomeAndInfo>
                <Welcome bg={welcomeBg} />
                <ProfileInfo1 />
                <ProfileInfo2 />
            </WelcomeAndInfo>
            <PlattformAndProject>
                {/* <PlattformSetting /> */}
                <GenerateLinks />
                <Projects />
            </PlattformAndProject>
        </>
    );
}

const WelcomeAndInfo = styled.div`
  display: flex;
  margin-top: 30px;
  height: 377px;
`;
const PlattformAndProject = styled.div`
  display: flex;
  margin-top: 30px;
`;

export default DashHome;