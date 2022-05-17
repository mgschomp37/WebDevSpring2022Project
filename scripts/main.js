import { response } from "express";

class User{
    constructor(id, username, password){
        this.userID = id;
        this.userName = username;
        this.pWord = password;
        
    }

    //getters and setters
    getUserId(){
        return this.userID;
    }

    getUsername(){
        return this.userName;
    }

    getPword(){
        return this.pWord
    }

    setUserId(id){
        this.userID = id
    }

    setUsername(username){
        this.userName = username;
    }
}


const nav = document.querySelector("nav");
if(getCurrentUser()){
    nav.innerHTML = `
        <a href="index.html">Home</a>
        <a href="profile.html">Profile</a>
        <a href="logout">Logout</a>
        <a href="about.html">About</a>
    `;
}

else{
    nav.innerHTML = `
        <a href="index.html">Home</a>
        <a href="login.html">Login</a>
        <a href="about.html">About</a>
    `;
}

export async function fetchData(url = '', data = {}, methodType){
    const respose = await fetch(`http://localhost:3000/${url}`, {
        method: methodType,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    if(response.ok){
        return await response.json();
    } else {
        throw await response.json();
    }
}
function setCurrentUser(user){
    localStorage.setItem("user", JSON.stringify(user));
}

function removeCurrentUser(){
    localStorage.removeItem("user");
}

function getCurrentUser(){
    return JSON.parse(localStorage.getItem("user"));
}

export const logoutBtn = document.getElementById("logout");
if (logoutBtn) {
    logoutBtn.addEventListener("click", logout)
    }

function logout(){
    removeCurrentUser();
    window.location.href = "login.html";
}