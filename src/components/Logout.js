import React from "react";
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const LogoutUser = ({ setUserState }) => {
    function onClickHandler() {
        // logoutUser();
        // remove cookies and reset state
        cookies.remove('name');
        cookies.remove('token');
        console.log('cookies removed')
        setUserState("");
    }
    return (
        <div>
            <button onClick={onClickHandler}>LOGOUT</button>
        </div>
    )
};

export default LogoutUser;