function login(e){
    e.preventDefault();

    const name = document.getElementById("username").value;
    const pword = document.getElementById("password").value;
    postData('http://localhost:3000/login', {username: name, password: pword})
    .then((data) => {
        if(!data.message) {
            window.location.href = "index.html";
        }
    })
    .catch((err) => {
        const errText = error.message;
        console.log(`Error: ${errText}`)
});

}