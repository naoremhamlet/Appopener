import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import {
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

import linkIcon from "../../../asset/images/svg/link-icon.svg";

const API_ROUTE = process.env.REACT_APP_API_ROUTE;
const regex = new RegExp(
  "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
);

function GenerateLink({ user }) {
  const [link, setLink] = useState();
  const [hostname, setHostname] = useState();
  const [createdmsg, setCreatedmsg] = useState({
    success: false,
    msg: "",
    link: undefined,
  });

  useEffect(() => {
    getHostname();
  }, [link]);

  const getHostname = () => {
    axios
      .get(`${API_ROUTE}/links/host?uri=${link}`)
      .then((res) => {
        if (res.data.success && res.data.hostname != "www") {
          setHostname(res.data.hostname);
        } else {
          setHostname(undefined);
        }
      })
      .catch((err) => console.log(err));
  };

  function generateLink() {
    if (regex.test(link)) {
      axios
        .post(`${API_ROUTE}/links/shorten`, {
          email: user && user.email,
          link,
          host: hostname,
        })
        .then((res) => {
          if (res.data.success) {
            setHostname(undefined);
            setLink("");
            setCreatedmsg(res.data);
          } else {
            setCreatedmsg({
              success: false,
              msg: "something went wrong... Please try again!",
            });
          }
        })
        .catch((err) =>
          setCreatedmsg({
            success: false,
            msg: "something went wrong... Please try again!",
          })
        );
    } else {
      setCreatedmsg({
        success: false,
        msg: "Invalid link... Please check and try again!",
      });
    }
  }

  return (
    <GenerateLinkContainer>
      <p className="title">Genarate Links</p>
      <p className="subtitle">
        Hello, Mark Johnson! You can generate the links
      </p>
      <div className="input-bar">
        <div>
          <input
            type="text"
            placeholder="Paste the link here"
            value={link}
            onChange={(e) => {
              setLink(e.target.value.trim());
              setCreatedmsg({ msg: "" });
            }}
          />

          <img
            src={linkIcon}
            alt=""
            onClick={() => {
              navigator.clipboard.readText().then((text) => {
                setLink(text);
              });
            }}
          />
        </div>
        <p className="button" onClick={generateLink}>
          Generate link
        </p>
      </div>

      <p className="link-created-msg" style={{ fontSize: 14 }}>
        <div>
          {createdmsg.success ? (
            <a
              href={createdmsg.link}
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
              rel="noopener noreferrer"
            >
              {createdmsg.link}
            </a>
          ) : (
            <span>{createdmsg.msg}</span>
          )}
        </div>
        <div style={{ position: "absolute" }}>
          {hostname && hostname === "youtube" && (
            <AiFillYoutube color="red" size={40} />
          )}
          {hostname && hostname === "instagram" && (
            <AiFillInstagram color="red" size={40} />
          )}
          {hostname && hostname === "twitter" && (
            <AiFillTwitterSquare color="red" size={40} />
          )}
        </div>
      </p>
      <p className="to-learn">
        To <span style={{ color: "#2EA44F" }}>Learn</span> with{" "}
        <span style={{ color: "#FC0834" }}>video</span>
      </p>
    </GenerateLinkContainer>
  );
}
export default GenerateLink;

const GenerateLinkContainer = styled.div`
  border-radius: 20px;
  width: auto;
  color: white;
  padding: 30px;
  background: linear-gradient(
    138.78deg,
    rgba(6, 11, 40, 0.94) 17.44%,
    rgba(10, 14, 35, 0.49) 93.55%,
    rgba(10, 14, 35, 0.69) 100.55%
  );
  border-radius: 20px;
  .title {
    font-size: 20px;
    font-weight: bolder;
  }
  .subtitle {
    font-size: 16px;
    margin: 8px 0 0 0;
    opacity: 0.8;
  }
  .input-bar {
    display: flex;
    margin: auto;
    margin-top: 80px;
    margin-left: 60px;

    div {
      position: relative;
      display: flex;
      width: 50%;
    }
    input {
      height: 40px;
      width: 800px;
      border: none;
      padding: 12px 30px;
      font-size: 16px;
      background-color: #131436;
      margin-left: 10px;
      color: white;
      opacity: 0.7;
      ::placeholder {
        color: #ffffff;
        opacity: 0.6;
        font-size: 14px;
      }
      :focus {
        outline: none;
      }
      border-radius: 10px;
    }
    position: relative;
    img {
      position: absolute;
      right: 10px;
      max-width: 45px;
      top: 7px;
    }
    .button {
      height: fit-content;
      background-color: #2ea44f;
      padding: 21px 50px;
      width: 250px;

      border-radius: 15px;
      text-align: center;
      font-weight: bolder;
      margin-left: 30px;
      cursor: pointer;
    }
  }
  .to-learn {
    text-align: center;
    font-size: 25px;
    text-transform: uppercase;
    margin-top: 100px;
    opacity: 0.7;
    font-weight: bolder;
  }
`;
