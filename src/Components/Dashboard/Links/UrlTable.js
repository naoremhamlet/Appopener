import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import axios from "axios";

const API_ROUTE = process.env.REACT_APP_API_ROUTE;

function UrlTable({ user }) {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    axios
      .post(
        `${API_ROUTE}/links/getlinks`,
        { email: user.email },
        { withCredentials: true }
      )
      .then((res) => {
        if (res && res.data.success) setLinks(res.data.links);
        else setLinks([]);
      })
      .catch((err) => setLinks([]));
  }, []);

  function Thead({ data }) {
    return data.map((el, i) => (
      <th key={"head" + i}>
        {el}{" "}
        <span>
          <AiFillCaretDown />
        </span>
      </th>
    ));
  }

  function TBody({ data }) {
    return data.map((el, i) => (
      <tr key={"body" + i}>
        <td>
          <a
            href={el.long}
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
            rel="noreferrer"
          >
            {el.long}
          </a>
        </td>
        <td>
          <a
            href={el.short}
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
            rel="noreferrer"
          >
            {el.short}
          </a>
        </td>
        <td>
          {el.domain && el.domain === "youtube" && (
            <AiFillYoutube color="red" />
          )}
          {el.domain && el.domain === "instagram" && (
            <AiFillInstagram color="red" />
          )}
          {el.domain && el.domain === "twitter" && (
            <AiFillTwitterSquare color="red" />
          )}
        </td>
        <td>{el.click}</td>
        <td>{el.created}</td>
        <td
          className="edit-del"
          onClick={() => {
            axios
              .post(
                `${API_ROUTE}/links/delete`,
                { link: el.short },
                { withCredentials: true }
              )
              .then((res) => {
                if (res && res.data.success) {
                  links.splice(i, 1);
                  setLinks(links);
                }
              })
              .catch((err) => console.log(err));
          }}
        >
          <AiOutlineDelete />
        </td>
      </tr>
    ));
  }

  if (!links) return <div>Loading...</div>;

  return (
    <UrlTableContainer>
      <table>
        <thead>
          <tr>
            <Thead data={["ORIGINAL URL", "SHORT URL", "PLATFORM", "CLICKS", "CREATED ON"]} />
          </tr>
        </thead>
        <tbody>
          <TBody data={links} />
        </tbody>
      </table>
    </UrlTableContainer>
  );
}

export default UrlTable;

const UrlTableContainer = styled.div`
  color: white;
  width: 98%;
  margin-top: 50px;
  table {
    width: 100%;
    text-align: center;

    tr:nth-child(1n) {
      background-color: #121241;
    }
    tr:nth-child(2n) {
      background-color: #11132c;
    }

    th,
    td {
      padding: 17px 10px;
      font-size: 16px;
      p {
        width: 50%;
        text-align: center;
        cursor: pointer;
      }
    }
    th {
      opacity: 0.8;
      font-weight: normal;
      span {
        cursor: pointer;
        margin: auto;
        margin-left: 5px;
        font-size: 13px;
      }
    }
    td {
      opacity: 0.3;
      justify-content: center;
    }
  }

  .edit-del {
    display: flex;
  }
`;
