const users = [
    {
        userID: 24680,
        username: "mu1234",
        pword: "Applesauce12"
    },
    {
        userID: 51892,
        username: "bobobo543",
        pword: "jellyJiggler99"

    }
];
//function to get all users
let getUsers = () => users;

function login(username, pword) {
    const user = users.filter((u) => u.username === username);
    if(!user[0]) throw Error("User not found");
    if(user[0].pword !== pword) throw Error("Incorrect password");

    return user[0];
}

//need to export to allow access
module.exports = { getUsers, login };
