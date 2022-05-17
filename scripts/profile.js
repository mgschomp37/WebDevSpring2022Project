import
{
    getCurrentUser, setCurrentUser, removeCurrentUser, logout, fetchData
}

from './main.js';

let user = getCurrentUser(); //if the user is logged in, display the profile page

if(!user) window.location.href = "login.html"; 

let profile = document.getElementById("profile"); 
profile.innerHTML = `
    <h2>${user.username}'s Profile</h2>
    <div>
        <button class = "btn" id="edit-profile">Edit Profile</button>
        <button class = "btn" id="logout">Logout</button>
        <button class = "btn" id="delete-profile">Delete Profile</button>
    </div>
    `;

    document.getElementById("edit-profile").addEventListener("click", editProfile);
    document.getElementById("logout").addEventListener("click", logout);
    document.getElementById("delete-profile").addEventListener("click", deleteProfile);

    function editProfile(){
        profile.classList.toggle("hide"); //hides the profile div
        let editProfile = document.getElementById("edit-profile-form");
        editProfile.innerHTML = `
            <form id="user-form" class="basic-form">
                <h2>Edit Profile</h2>
                <label for="username">Username</label>
                <input type="text" id="username" placeholder="${user.username}">
                <br>
            </form>
            
            <form id="pass-form" class="basic=form>
                <label for="password">Password</label>
                <input type="password" name="pword" id="pword">
                <br>
            </form>
            
            <form id = location-form class="basic-form">
                <label for="location">Location</label>
                <input type="text" id="location" placeholder="${user.location}">
                <br>
            </form>
            
            <form id="own-game-form" class="basic-form">
                <label for="game">Games Owned</label>
                <input type="text" id="own-game" placeholder="${user.gamesOwned}">
                <br>
            </form>
            
            <form id="want-game-form" class="basic-form">
                <label for="game">Games Wanting To Play</label>
                <input type="text" id="want-game" placeholder="${user.gamesWantingToPlay}">
                <br>
            </form>
            
            <button class="btn" id="save-profile">Save</button>
            <button class="btn" id="cancel-profile">Cancel</button>
            `;

            editProfile.addEventListener("click", saveProfile);
            document.getElementById("cancel-profile").addEventListener("click", (e) => {
                window.location.href="profile.html";
            })
    }

    function saveProfile(e){
        e.preventDefault(); //prevents the page from refreshing
        let username = document.getElementById("username").value;
        let password = document.getElementById("pword").value;
        let location = document.getElementById("location").value;
        let ownGame = document.getElementById("own-game").value;
        let wantGame = document.getElementById("want-game").value;
        
        if(username === user.username){
            let err = "No Changes Made";
            document.querySelector("#edit-profile-form p.error").innerHTML = err;
        } else{
            fetchData('/users/update', {userId: user.user_id, username: username, password: password, location: location, gamesOwned: ownGame, gamesWantingToPlay: wantGame})
            .then((data) => {
                if(!data.message) {
                    removeCurrentUser();
                    setCurrentUser(data);
                    window.location.href = "profile.html"
                }
            })
            .catch((err) => {
                const errText = err.message;
                document.querySelector("#edit-profile-form p.error").innerHTML = errText;
                console.log(`Error: ${errText}`)
            })
        }
    }

    function deleteProfile(){
        if (confirm("Are you sure you want to delete your profile?")) {
            fetchData('/users/delete',{userId: user.user_id}, "DELETE")
            .then((data) => {
                if(!data.message) {
                    console.log(data.success)
                    logout();
                    window.location.href = "register.html"

                }
            })
            .catch((err) => {
                const errText = err.message;
                document.querySelector("#profile div p.error").innerHTML = errText;
                console.log(`Error: ${errText}`)
            })
        
    }
}

                
            
            


    