const form = document.getElementById("loginForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = JSON.parse(localStorage.getItem("user"));
    
    if(!username || !password) {
        
        alert("Please fill in all fields.");
        return false;
    }
    if(user && user.username !== username && user.password !== password){
        alert("Invalid username or password is wrong.");
        return false;
    }
    if(user && user.username === username && user.password === password){
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard page
    }else{
        alert("Invalid username or password.");
        return false;
    }
    
    // ถ้าผ่านการตรวจสอบแล้ว ให้ส่งฟอร์ม
    return true;
});