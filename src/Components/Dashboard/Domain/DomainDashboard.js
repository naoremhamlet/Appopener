import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import Table from "./Table";

const API_ROUTE = process.env.REACT_APP_API_ROUTE;
const APP_SUBDOMAIN = process.env.REACT_APP_SUBDOMAIN;


function AlertPopup ({type, msg, closePopup, clearAlert}) {

  useEffect(() => {
    const timer = setTimeout(() => { 
      closePopup();
      clearAlert(); 
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PopupContainer>
      <p className="close" onClick={() => closePopup()}>
        <AiOutlineClose />
      </p>
      <p className="title">{type}</p>
      <p className="msg">{msg}</p>
    </PopupContainer>
  );
};


function DomainDashboard({ user, setElement }) {
  const [showPopup, setShowPopup] = React.useState(false);
  const [domains, setDomains] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [currentDomain, setCurrentDomain] = useState();
  const [currentPlatform, setCurrentPlatform] = useState();
  const [currentRoute, setCurrentRoute] = useState();
  const [siteInput, setSiteInput] = useState(false);
  const [link, setLink] = useState();
  const [tableLoad, setTableLoad] = useState(false);
  const [alert, setAlert] = useState({type: null, msg: null});

  useEffect(() => {
    axios.get(`${API_ROUTE}/subdomain/fetch`, {withCredentials: true})
    .then(res => {
      if(res.data.success) {
        setDomains(res.data.domains);
      } else {
        console.log("here");
        setElement("checkout");
      }
    }).catch(err => {
      console.log(err)
    })
  }, [])


  useEffect(() => {
    axios.post(`${API_ROUTE}/subdomain/get_routes`, {domain: currentDomain}, {withCredentials: true})
    .then(res => {
      if(res.data.success) {
        setRoutes(res.data.routes)
        setTableLoad(false);
      }
    })
  }, [tableLoad])

  const callAlert = (type, msg) => {
    console.log(type, msg);
    setAlert({type: type, msg: msg});
    setShowPopup(true);
  }


  const connect = () => {
    if(currentDomain && link) {
      if(currentPlatform) {
        let route = currentPlatform;
        if(currentRoute && currentRoute.length) {
          route = `${route}/${currentRoute}`
        }
        axios.post(`${API_ROUTE}/subdomain/route_available`, {route, domain: currentDomain, link}, {withCredentials: true})
        .then(res => {
          if(res.data.success) {
            callAlert("Success", `${currentDomain}${APP_SUBDOMAIN}/${route} created successfully`)
            setCurrentPlatform(null);
            setCurrentRoute(null);
            setLink(null);
            setTableLoad(true);
          } else {
            callAlert("Warning", `${currentDomain}${APP_SUBDOMAIN}/${route} already exist... you can chage in edit section`)
          }
        })
        .catch(err => {
          callAlert("Error", "something went wrong.. Please try again later")
        })
      } else {
        callAlert("Warning", `${currentDomain}${APP_SUBDOMAIN} already exist... you can chage in edit section`)
      }
    }
  } 



const SelectBox = ({options, type, optionSelect}) => {
  return(
    <select onChange={optionSelect}>
      <option value={""} selected disabled hidden>Select {type}</option>
      <option value="Add New">
        {type==="Domain"? "Buy Another":"Others"}
      </option>
      {options.map(el => (
        <option value={el}>
          {type==="Domain"? `${el}${APP_SUBDOMAIN}`:el}
        </option>
      ))}
    </select>
  )
}

  return (
    <DomainDashboardContainer>
      {showPopup && alert.type && alert.msg &&
        <AlertPopup 
          type={alert.type} 
          msg={alert.msg} 
          clearAlert={() => setAlert({type: null, msg: null})}
          closePopup={() => setShowPopup(false)} />
      }
      <p className="title">Connect Your Domain</p>
      <div className="horizontal-strip">
        <div className="horizontal-innercontainer">
          <SelectBox 
            options={domains}
            type={"Domain"}
            optionSelect={(e) => {
              if(e.target.value==="Add New") {
                setElement("checkout");
              } else {
                  setRoutes([])
                  setCurrentDomain(e.target.value);
                  setCurrentPlatform(null);
                  setCurrentRoute(null);
                  setSiteInput(false);
                  setTableLoad(true);
              }
            }}
          />
          {currentDomain && 
          <>
            {siteInput?
              <input 
                placeholder="Site" 
                type={"text"}
                value={currentPlatform}
                onChange={(e) => {
                  setCurrentPlatform(e.target.value.trim().toLowerCase().split(' ').join(''));
                }} />
              :
              <SelectBox 
                options={["youtube","instagram","twitter","spotify"]}
                type={"Site"}
                optionSelect={(e) => {
                  if(e.target.value==="Add New") {
                    setSiteInput(true);
                    setCurrentPlatform(null);
                  } else {
                    setCurrentPlatform(e.target.value)
                  }
                  setCurrentRoute(null);
                }}
              />
            }
          </>
          }
          {currentDomain && currentPlatform &&
            <input 
              placeholder="Route" 
              type={"text"}
              value={currentRoute}
              onChange={(e) => {
                setCurrentRoute(e.target.value.trim().toLowerCase().split(' ').join(''));
              }} />
          }
        </div>
      </div>
      <p className="title">Target</p>
      <div className="horizontal-strip">
        <div className="horizontal-innercontainer" style={{ justifyContent: 'space-between'}}>
          <p className="target-domain" style={{fontSize: 18}}>
            {currentDomain && `${currentDomain}${APP_SUBDOMAIN}`}
            {currentPlatform && `/${currentPlatform}`}
            {currentRoute && `/${currentRoute}`}
          </p>
          <input 
            placeholder="Enter url" 
            type={"text"}
            value={link}
            onChange={(e) => setLink(e.target.value.trim())} />
        </div>
      </div>
      <p className="connect-button" onClick={connect}>
        Connect
      </p>
      <p className="title">Details</p>
      {/* <UrlTable user={user} /> */}
      {!tableLoad &&
        <Table 
          routes={routes} 
          domain={currentDomain}
          setTableLoad={(d) => setTableLoad(d)} />
      }
    </DomainDashboardContainer>
  );
}
export default DomainDashboard;
const DomainDashboardContainer = styled.div`
  margin: 50px auto;
  width: 96%;
  color: white;
  .title {
    font-weight: 700;
    font-size: 36px;
    line-height: 150%;
    margin-top: 40px;
  }
  .horizontal-strip {
    margin: 20px 0;
    background-color: #070c28;
    padding: 20px;
    border-radius: 20px;
  }
  .horizontal-innercontainer {
    display: flex;
    align-items: center;
    background-color: #121241;
    border-radius: 20px;
    padding-left: 20px;
    .website {
      font-weight: 700;
      font-size: 36px;
      line-height: 150%;
    }
    select {
      border: none;
      outline: none;
      border-radius: 20px;
      padding: 25px 50px;
      opacity: 0.7;
      font-size: 18px;
      font-weight: 700;
      background-color: #161656;
      color: white;
    }
    .arrow-down {
      margin-left: 20px;
      background-color: white;
      color: black;
      font-size: 20px;
      padding: 0px 5px;
      align-self: center;
      justify-self: center;
      cursor: pointer;
      ul {
        position: absolute;
        list-style: none;
        color: white;
        background-color: #0b0f28;
        padding: 20px 40px;
        border-radius: 20px;
        z-index: 1;
        font-weight: bolder;
        opacity: 0.9;
        li {
          border-bottom: 1px solid rgba(0, 117, 255, 0.28);
          margin-bottom: 10px;
          padding: 10px 0;
        }
        display: none;
      }
      :hover ul {
        display: block;
      }
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
  }
  .connect-button {
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    background-color: #0075ff;
    width: fit-content;
    margin: 20px auto;
    padding: 10px 60px;
    border-radius: 20px;
    cursor: pointer;
  }
`;
const PopupContainer = styled.div`
  position: absolute;
  width: 840px;
  height: 455px;
  max-width: 850px;
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
  .msg {
    font-size: 20px;
    margin-top: 1rem;
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
`;
