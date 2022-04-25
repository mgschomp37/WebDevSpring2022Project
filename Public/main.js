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

function setCurrentUser(user){
    localStorage.setItem("user", JSON.stringify(user));
}

function removeCurrentUser(){
    localStorage.removeItem("user");
}