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

//need to export to allow access
module.exports = { getUsers };
