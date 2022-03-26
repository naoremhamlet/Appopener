import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bg from "../../../asset/images/svg/branding-landing-bg.png";
import curve from "../../../asset/images/svg/curve.png";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";


const API_ROUTE = process.env.REACT_APP_API_ROUTE;
// const APP_DOMAIN = process.env.REACT_APP_DOMAIN;

const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const regexp = /^[a-zA-Z0-9]+[a-zA-Z0-9-_]*[a-zA-Z0-9]+$/g;

function CheckOut({setElement}) {
  const [cart, setCart] = useState([]);
  const [input, setInput] = useState("");
  const [errmsg, setErrmsg] = useState();

  const total = cart.reduce((acc, curr) => acc + curr.price, 0);

  const checkDomain = (e) => {
    const val = e.target.value.trim().toLowerCase();

    if (val.length < 2) {
      setErrmsg("cannot be less than 2 characters.");
    } else {
      const exp = val.match(regexp);
      if (exp) {
        setErrmsg(null);
      } else {
        setErrmsg("sub domain not in allowed format");
      }
    }

    setInput(val);
  };

  const addToCart = () => {
    axios
      .get(`${API_ROUTE}/subdomain/availability?subdomain=${input}`)
      .then((res) => {
        if (res.data.success) {
          if (
            !errmsg &&
            !cart.filter((el) => el.domain === input).length &&
            input &&
            input.length >= 2
          ) {
            if (res.data.available) {
              const price = cart.length > 0? cart.length > 5? 100 : 200: 250;
              cart.forEach(el => {el.price = price });
              cart.push({ domain: input, price: price });
              setCart(cart);
              setInput("");
            } else {
              setErrmsg("subdomain already exists");
            }
          }
        } else {
          setErrmsg("something went wrong.. please try again later");
        }
      })
      .catch((err) => {
        setErrmsg("something went wrong.. please try again later")
      });
  };

  const checkOut = () => {
    if(cart.length) {
      axios.post(`${API_ROUTE}/subdomain/checkout`, {cart: cart}, {withCredentials: true})
      .then(res => {
        console.log(res.data);
        if(res.data.success) {
          setElement("domain")
        } else {
          alert("something went wrong please try again later")
        }
      }).catch(err => alert("something went wrong"))
    }
  }

  const CreateCart = () => {
    return (
      <div className="cart">
        {cart.map((item, index) => (
          <div className="card-item" key={index}>
            <p className="site">{item.domain}.appopener.com</p>
            <p className="price">₹{numberWithCommas(item.price)}</p>
            <p className="delete" 
              style={{padding: "0 10px"}}
              onClick={() => {
                console.log("delete")
                cart.splice(index, 1);
                console.log(cart);
                const price = cart.length > 1? cart.length > 6? 100 : 200: 250;
                cart.forEach(el => {el.price = price });
                setCart(cart);
              }}>
              <AiOutlineDelete />
            </p>
          </div>
        ))}
        <div className="card-item total">
          <p className="price">
            Total Amount <span>₹{numberWithCommas(total)}</span>
          </p>
        </div>
      </div>
    )
  }

  const PricesTable = ({table}) => {
    return (
      <div className="prices">
        <div className="container">
          {table.map(el => (
            <div>
              <p className="title">{el.title}</p>
              <p className="sub-title">{el.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    )
  } 

  return (
    <CheckOutContainer>
      <Body bg={bg}>
        <div className="top">
          <p className="title">Branded Links</p>
          <p className="sub-title">MAKE BRAND WITH US</p>
          <div className="input-button">
            <input
              type="text"
              placeholder="Type your brand name"
              value={input}
              onChange={checkDomain}
            />
            <p
              className="button"
              style={{ opacity: errmsg ? 0.3 : 1 }}
              onClick={addToCart}
            >
              Get it
            </p>
          </div>
          <p className="error">{errmsg}</p>
          <img className="curve" src={curve} alt={""} />
        </div>

        <div className="bottom">
          <CreateCart />
          <PricesTable 
            table={[
              {title: "₹ 250", subtitle: "Single"},
              {title: "₹ 200", subtitle: "Multiple"},
              {title: "₹ 100", subtitle: "Bulk"}
            ]} />
          <div onClick={checkOut}
            style={{opacity: cart.length ? 1 : 0.5,padding: 15, backgroundColor:'blue', fontSize:25, width: 'fit-content', borderRadius: 5, cursor: "pointer" }}>
            Check-out
          </div>
        </div>
      </Body>
    </CheckOutContainer>
  );
}
export default CheckOut;

const CheckOutContainer = styled.div`
  display: flex;
  background-color: #030303;
  width: 100%;
  margin-top: 25px;
  border-radius: 20px;
`;
const Body = styled.div`
  width: 100%;
  padding: 40px 30px 100px;
  //   margin-left: 12%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  color: white;
  // height: 150vh;
  .bg {
    position: absolute;
    top: 0;
  }
  background-image: url(${(props) => props.bg});
  background-repeat-y: no-repeat;
  //   background-color: black;
  .top {
    text-align: center;
    margin-top: 100px;
    .title {
      font-weight: 700;
      font-size: 52px;
      line-height: 62px;
      z-index: 1;
    }
    .sub-title {
      font-weight: 400;
      font-size: 20px;
      line-height: 160%;
      opacity: 0.7;
    }
    .input-button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      .button {
        background-color: #0075ff;
        border-radius: 5px;
        padding: 15px 30px;
        font-weight: 700;
        color: white;
        border: 1px solid #030303;
        cursor: pointer;
        font-weight: 700;
        font-size: 24px;
        line-height: 150%;
        border-radius: 20px;
      }
      input {
        border: none;
        outline: none;
        border-radius: 20px;
        padding: 25px 30px;
        opacity: 0.7;
        font-size: 18px;
        font-weight: 700;
        color: white;
        background-color: #0c0c0c;
        width: 800px;
        margin-right: 10px;
        ::placeholder {
          font-weight: 700;
          font-size: 18px;
          line-height: 150%;
        }
      }
    }
    .error {
      font-weight: 700;
      font-size: 18px;
      line-height: 150%;
      opacity: 0.7;
      margin-top: 50px;
    }
    .curve {
      position: absolute;
      top: 110vh;
      height: 200px;
      width: 80%;
      left: 12%;
      z-index: 3;
    }
  }
  .bottom {
    width: 80%;
    margin: 0 auto;
    margin-top: 600px;
    .card-item {
      display: flex;
      border-bottom: 2px solid #293546;
      padding: 15px 0;
      font-weight: 500;
      font-size: 25px;
      line-height: 100%;
      .site {
      }
      .price {
        margin-left: auto;
        span {
          margin-left: 20px;
        }
      }
    }
    .card-item.total {
      width: fit-content;
      margin-left: auto;
      margin-top: 20px;
    }
    .prices {
      width: 80%;
      margin: 0 auto;
      margin-top: 100px;
      .container {
        display: flex;
        justify-content: space-between;
        .title {
          font-weight: 700;
          font-size: 30px;
          line-height: 100%;
          text-align: center;
          color: #ffffff;
        }
        .sub-title {
          font-weight: 500;
          font-size: 30px;
          line-height: 100%;
          text-align: center;
          color: #abcbee;
        }
      }
    }
  }
`;
