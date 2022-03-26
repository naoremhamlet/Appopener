import React from 'react';
import axios from 'axios';
import GoogleLogin from "react-google-login";
import Cookie from 'js-cookie';

const API_ROUTE = process.env.REACT_APP_API_ROUTE;
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login(props) {

    const handleSignin = (googleUser) => {
        try {
            axios.post(`${API_ROUTE}/login`, { token: googleUser.tokenId, withCredentials: true})
            .then(res => {
                if(res.data.success) {
                    Cookie.set('session-token', res.data.token);
                    
                    window.location = "/dashboard";
                } else {
                    Cookie.remove('session-token')
                    window.location = "/";
                }
            })
        } catch (err) {
            Cookie.remove('session-token')
            window.location = "/";
        }
    }
    return (
        <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            onSuccess={handleSignin}
            buttonText="Login"
            cookiePolicy={'single_host_origin'}
        />
    );
}

export default Login;