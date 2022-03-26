import React from "react";
import styled from "styled-components";
// import profilePic from "../../asset/images/svg/profile-pic.svg";
import edit from "../../asset/images/svg/edit.svg";
import overviewIcon from "../../asset/images/svg/overview.svg";
import teamIcon from "../../asset/images/svg/team.svg";
import projectsIcon from "../../asset/images/svg/projects.svg";

function Profile({user, setElement}) {
  return (
    <ProfileContainer>
      <div className="profile-pic">
        <img src={user && user.picture} alt={""} />
        <img className="edit" src={edit} alt="" />
      </div>
      <div className="profile-details">
        <p className="name">{user && user.name}</p>
        <p className="email">{user && user.email}</p>
      </div>
      <div className="profile-buttons">
        <p>
          <img src={overviewIcon} alt="" />
          <span>Get yours</span>
        </p>
        <p onClick={() => setElement("checkout")}>
          <img src={teamIcon} alt="" />
          <span>CART</span>
        </p>
        <p>
          <img src={projectsIcon} alt="" />
          <span>MARKETPLACE</span>
        </p>
      </div>
    </ProfileContainer>
  );
}
export default Profile;

const ProfileContainer = styled.div`
  width: auto;
  background: linear-gradient(
    112.83deg,
    rgba(6, 11, 40, 0.94) 0%,
    rgba(10, 14, 35, 0.62) 55.84%
  );
  box-shadow: 0px 2px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 20px;
  color: white;
  padding: 20px;
  margin-top: 30px;
  display: flex;
  .profile-pic {
    max-width: fit-content;
    position: relative;
    cursor: pointer;
  }
  .edit {
    position: absolute;
    bottom: -5px;
    right: -5px;
  }
  .profile-details {
    align-self: center;
    margin-left: 20px;
    .name {
      font-size: 18px;
      font-weight: bolder;
      line-height: 1.3;
    }
    .email {
      font-size: 14px;
      opacity: 0.8;
    }
  }
  .profile-buttons {
    display: flex;
    align-self: center;
    gap: 30px;
    margin: 0 50px 0 auto;

    img {
      margin-right: 8px;
      width: 20px;
    }
    span {
      align-self: center;
    }
    p {
      display: flex;
      cursor: pointer;
      padding: 10px 15px;
      border-radius: 12px;
      :hover {
        background-color: #0075ff;
      }
    }
  }
`;
