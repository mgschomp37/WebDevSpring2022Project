class User{
    constructor(id, username, pword){
        this.userID = id;
        this.username = username;
        this.pword = pword;
        
    }

    //getters and setters
    getUserId(){
        return this.userID;
    }

    getUsername(){
        return this.username;
    }

    getPword(){
        return this.pword
    }

    setUserId(id){
        this.userID = id
    }

    setUsername(username){
        this.username = username;
    }
}

