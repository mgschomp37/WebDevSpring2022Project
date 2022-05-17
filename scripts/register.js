const regForm = document.getElementById("register-form");
if (regForm) regForm.addEventListener('submit', register);

function register(e){
    e.preventDefault();

    const name = document.getElementById("username").value;
    const pword = document.getElementById("password").value;

    postData('http://localhost:3000/register', {username: name, password: pword})
    .then((data) => {
        if(!data.message) {
            setCurrentUser(data);
            window.location.href = "index.html";
        }
    })

    .catch((err) => {
        const errText = err.message;
        document.querySelector("#reg-form p.error").innerHTML = errText;
        document.getElementById("password").value = "";
        console.log(`Error: ${errText}`);
});
}