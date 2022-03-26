// <<<<<<< Updated upstream
// <<<<<<< HEAD
// import React from "react";
// import styled from "styled-components";
// import backgroundimg from "../../asset/images/svg/background.svg";
// import Sidebar from "../Sidebar";
// import Profile from "./Profile";
// // import DashboardHeader from "./HomeHeader";
// import Welcome from "./Welcome";
// import ProfileInfo1 from "./ProfileInfo1";
// import ProfileInfo2 from "./ProfileInfo2";
// // import PlattformSetting from "./PlatformSetting";
// import Projects from "./Projects";
// import welcomeBg from "../../asset/images/svg/welcome-back.png";
// import GenerateLinks from "./GenerateLinks";
// function Dashboard() {
//   return (
//     <DashboardContainer bg={backgroundimg}>
//       <Sidebar />
//       <DashboardBody>
//         {/* <DashboardHeader /> */}
//         <Profile />
//         <WelcomeAndInfo>
//           <Welcome bg={welcomeBg} />
//           <ProfileInfo1 />
//           <ProfileInfo2 />
//         </WelcomeAndInfo>
//         <PlattformAndProject>
//           {/* <PlattformSetting /> */}
//           <GenerateLinks />
//           <Projects />
//         </PlattformAndProject>
//       </DashboardBody>
//     </DashboardContainer>
//   );
// =======
// import React from 'react';
// =======
import React, { useEffect } from "react";
import Login from "./Login";
import Cookies from "js-cookie";

function Home(props) {
  useEffect(() => {
    if (Cookies.get("session-token")) {
      window.location = "/dashboard";
    }
  }, []);

  return <Login />;
}

export default Home;
