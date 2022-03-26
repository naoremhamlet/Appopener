import React, { useState } from "react";
import styled from "styled-components";
import profilePic from "../../../asset/images/svg/profile-pic.svg";
import {
  AiFillYoutube,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

function Profile() {
  return (
    <ProfileContainer>
      <p className="title">Profile</p>
      <p className="subtitle">Update your photo and personal details here</p>
      <div className="input-container">
        <div className="titles">
          <p className="key">Your Photo</p>
          <p className="subtitle">This will be displayed on your profile.</p>
        </div>
        <div className="image-container">
          <img src={profilePic} alt="" />
          <p className="delete">Delete</p>
          <p>Update</p>
        </div>
      </div>
      <div className="input-container">
        <p className="key">Website</p>
        <input
          placeholder="Enter your branded domian website"
          type="text"
          id="user-name"
        />
      </div>

      <div className="input-container">
        <p className="key">Username</p>
        <input placeholder="Enter your username" type="text" id="user-name" />
      </div>
      <div className="input-container">
        <p className="key">Location</p>
        <input placeholder="Enter your Location" type="text" id="user-name" />
      </div>
      <div className="input-container">
        <p className="key">Job Title</p>
        <input placeholder="Enter your Job title" type="text" id="user-name" />
        {/* <label for="checkbox">I am a freelancer</label>
          <input id="checkbox" type={"checkbox"} /> */}
      </div>
      <div className="input-container">
        <div className="titles">
          <p className="key">Alternative contact email</p>
          <p className="subtitle">
            Enter an alternative email if you’d like to add
          </p>
        </div>
        <input
          placeholder="Enter your alternative email"
          type="text"
          id="user-name"
        />
      </div>
      <div className="input-container">
        <p className="key">Interest</p>
        <input
          placeholder="In which area you want Spawnsered"
          type="text"
          id="user-name"
        />
      </div>
      <div className="input-container">
        <p className="key">Old Password</p>
        <input
          placeholder="Enter your old password"
          type="text"
          id="user-name"
        />
      </div>
      <div className="input-container">
        <p className="key">Change Password</p>
        <input
          placeholder="Enter your change password"
          type="text"
          id="user-name"
        />
      </div>
      <div className="input-container">
        <p className="key">Apps to Connect</p>
        <div className="icons">
          <p>
            <AiFillYoutube />
          </p>
          <p>
            <AiFillTwitterSquare />
          </p>
          <p>
            <AiFillInstagram />
          </p>
        </div>
      </div>
    </ProfileContainer>
  );
}

export default Profile;

const ProfileContainer = styled.div`
  color: white;
  padding: 30px;
  width: auto;
  .title {
    font-size: 1.7rem;
    font-weight: bolder;
  }
  .subtitle {
    font-size: 1.1rem;
    font-weight: lighter;
    opacity: 0.8;
    margin-top: 0.4rem;
    border-bottom: 1px solid #655f5f;
    padding-bottom: 15px;
  }
  .input-container {
    margin-top: 1.7rem;
    padding-bottom: 1.7rem;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #655f5f;
    align-items: center;
    .titles {
      min-width: 40%;
    }
    .image-container {
      display: flex;
      min-width: 40%;

      p {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
        margin: 10px;
        cursor: pointer;
      }
      .delete {
        margin-left: auto;
      }
    }

    .key {
      font-size: 1.4rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      min-width: 40%;
    }
    .subtitle {
      font-size: 1.1rem;
      border: none;
      opacity: 0.6;
      font-weight: normal;
    }
    input {
      outline: none;
      border: none;
      width: 40%;
      background: transparent;
      border: 1px solid #ffffff;
      box-sizing: border-box;
      border-radius: 6px;
      color: white;
      padding: 15px 30px;
      font-size: 1.1rem;

      ::placeholder {
        font-size: 1.1rem;
        opacity: 0.8;
      }
      img {
        max-width: 200px;
      }
    }
    .icons {
      display: flex;
      gap: 20px;
      p {
        font-size: 2.2rem;
        cursor: pointer;
      }
    }
  }
`;
