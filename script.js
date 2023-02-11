document.querySelector("#submit").addEventListener('click', () => {
    let password = document.getElementById("password").value;
    let confirm = document.querySelector("#confirm-password").value;
    let message = document.querySelector(".message");
    
    if(password !== confirm){
        message.textContent = "Oups! the password don't match."
    }
})