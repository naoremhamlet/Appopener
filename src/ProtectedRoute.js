import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const API_ROUTE = process.env.REACT_APP_API_ROUTE;


function ProtectedRoute({setUser, user}) {

  const [isAuth, setAuth] = useState();

  useEffect(() => {
    axios.get(`${API_ROUTE}/checklogin`, {withCredentials: true})
    .then(res => {
      if(res.data.success) {
        setUser(res.data.user)
        setAuth(true)
      }
      else
        setAuth(false)
    })
    .catch(()=> setAuth(false))
  }, [user])

  if(isAuth === undefined)  return null;

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;