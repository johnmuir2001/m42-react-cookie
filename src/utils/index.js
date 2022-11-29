import {getCookie, writeCookie} from "../common";
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const loginUser = async(username,email,password,setter) => {
    try {
        const response = await fetch("http://localhost:5001/loginuser",
        {
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        });
        const data = await response.json();
        setter(data.username);
        // set cookie for token and name  
        cookies.set('token', data.token, { path: '/' });
        cookies.set('name', data.username, { path: '/' })
    } catch (error) {
        console.log(error)
    }
};

export async function registerUser (username, email, password, setter) {
    try {
        const response = await fetch(`http://localhost:5001/addUser`,
        {
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        }
        );
        const data = await response.json;
        console.log(data);
        setter(data.username);
    } catch (error) {
        console.log(error);
    }
}

export async function readUsers (cookie) {
    try {
        const cookie = getCookie("jwt_token");
        console.log(cookie);
        const response = await fetch(`http://localhost:5001/readUsers`,
        {
            method: "GET",
            headers: {"Content-Type": "application/json",
                    "Authorization": `Bearer ${cookie}`}

        }
        );
        const data = await response.json();
        const usernames = data.user.map(user => user.username);
        return usernames;
    } catch (error) {
        console.log(error);
    }
};

export async function updateUser (username, key, value) {
    try {
        const response = await fetch(`http://localhost:5001/updateUser`,
        {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username" : username,
                "key": key,
                "value": value
            })
        }
        );
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

export async function logoutUser() {
    try {
        writeCookie("jwt_token","",0);
    } catch (error) {
        console.log(error)
    }
}

export async function deleteUser(username) {
    try {
        const response = await fetch (`http://localhost:5001/deleteUser`, 
        {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username
            })
        }
        );
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    };
}