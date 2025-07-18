const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    
    if(!username || !password) {
        alert("Please fill in all fields.");
        return false;
    }
    if(password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    if(username && confirmPassword && password.length >= 8){
        localStorage.setItem("user", JSON.stringify({username, password}));
        alert("Sign Up Successful!");
        window.location.href = "login.html"; // Redirect to login page
    }else {
        alert("Please fill in all fields.");
        return false;
    }
});