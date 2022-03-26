import React from 'react';
import { GoogleLogout } from 'react-google-login';
import Cookie from 'js-cookie';
import axios from 'axios';


const API_ROUTE = process.env.REACT_APP_API_ROUTE;
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;


function Logout(props) {
    const handleLogout = (googleUser) => {
        try {
            axios.get(`${API_ROUTE}/logout`, { withCredentials: true})
            .then(res => {
                if(res.data.success) {
                    Cookie.remove('session-token')
                    window.location = "/";
                }
            })
        } catch (err) {
            window.location("/")
        }
    }
    return (
        <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={handleLogout}
        />
    );
}

export default Logout;