import React, { useState } from 'react';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import axios from 'axios';


const API_ROUTE = process.env.REACT_APP_API_ROUTE;
const APP_SUBDOMAIN = process.env.REACT_APP_SUBDOMAIN;


function EditPopup ({domain, route, editRoute, closePopup}) {

  const [editedLink, setEditedLink] = useState();

  return (
    <PopupContainer>
      <p className="close" onClick={closePopup}>
        <AiOutlineClose />
      </p>
      <p className="title">Edit Route</p>
      <p>{domain}{APP_SUBDOMAIN}/{route}</p>
      <p>
        <input
          type={"text"}
          value={editedLink}
          placeholder='Enter new link'
          onChange={(e) => setEditedLink(e.target.value.trim())}  />
      </p>
      <p className="connect-button" onClick={() => editRoute(editedLink)}>Confirm</p>
    </PopupContainer>
  );
}


function Table({routes, domain, setTableLoad}) {

  console.log(APP_SUBDOMAIN)

  const [showPopup, setShowPopup] = useState();
  const [selectedRoute, setSelectedRoute] = useState();

    const deleteRoute = (route) => {
      if(domain && route && route.length > 0 && route!=="") {
        axios.post(`${API_ROUTE}/subdomain/delete_route`, {route, domain}, {withCredentials: true})
        .then(res => {
          if(res.data.success) {
            setTableLoad(true);
          }
        }).catch(err => console.log(err))
      }
    }

    const editRoute = (link) => {
      if(domain) {
        axios.post(`${API_ROUTE}/subdomain/edit_route`, {route: selectedRoute, domain, link}, {withCredentials: true})
        .then(res => {
          if(res.data.success) {
            setShowPopup(false);
            setSelectedRoute(null);
            setTableLoad(true);
          }
        }).catch(err => console.log(err))
      }
    } 

    function THead({data}) {
        return(
            <tr>
                {data.map(el => (
                    <th>{el}</th>
                ))}
            </tr>
        )
    }

    function TBody({data}) {
        return(
            data.map(el => (
                <tr>
                    <td>
                      <a href={`${domain}${APP_SUBDOMAIN}/${el.route}`} target={"_blank"}>
                        {domain}{APP_SUBDOMAIN}/{el.route}
                      </a>
                    </td>
                    <td href={el.link} target={"_blank"}>{el.link}</td>
                    <td>{el.click}</td>
                    <td onClick={() => {
                      setSelectedRoute(el.route);
                      setShowPopup(true)
                      console.log(showPopup);
                    }}><MdOutlineModeEditOutline /></td>
                    <td onClick={() => deleteRoute(el.route)}><AiOutlineDelete /></td>
                </tr>
            ))
        )
    }

    return (
        <RoutesTable>
          {showPopup && <EditPopup 
            domain={domain}
            route={selectedRoute} 
            editRoute={editRoute}
            closePopup={() => {
              setSelectedRoute(null);
              setShowPopup(false);
            }} />}
            <table>
                <thead>
                    <THead data={["Route","Link","Click"]} />
                </thead>
                <tbody>
                    <TBody data={routes} />
                </tbody>
            </table>
        </RoutesTable>
    );
}


const RoutesTable = styled.div`
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
    a {
      text-decoration: none;
      color: white;
    }
    
  }

  .edit-del {
    display: flex;
  }
`;


const PopupContainer = styled.div`
  position: absolute;
  width: 840px;
  height: 455px;
  z-index: 999;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: linear-gradient(
    180deg,
    #0c0c62 0%,
    rgba(14, 21, 117) 54.75%,
    rgba(6, 11, 40, 0) 100%
  );
  text-align: center;
  .title {
    font-weight: 700;
    font-size: 36px;
    line-height: 150%;
    margin-bottom: 20px;
  }
  .auto-connect {
    font-weight: 700;
    font-size: 34px;
    line-height: 150%;
    margin-bottom: 20px;
  }
  .connect-manually {
    margin-top: 40px;
    text-decoration: underline;
    color: #0123d8;
    cursor: pointer;
  }
  .close {
    position: absolute;
    top: 40px;
    right: 40px;
    font-size: 40px;
    cursor: pointer;
  }
  input {
    border: none;
    outline: none;
    border-radius: 20px;
    padding: 25px 50px;
    opacity: 0.7;
    font-size: 18px;
    font-weight: 700;
    background-color: #161656;
    color: white;
    width: 350px;
    text-align: center;
    ::placeholder {
      opacity: 0.8;
    }
  }
`;


export default Table;