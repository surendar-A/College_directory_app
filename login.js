document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (username === "student" && password === "password" && role === "student") {
        window.location.href = "student-dashboard.html";
    } else if (username === "faculty" && password === "password" && role === "faculty") {
        window.location.href = "faculty-dashboard.html";
    } else if (username === "admin" && password === "password" && role === "admin") {
        window.location.href = "admin-dashboard.html";
    } else {
        document.getElementById('error-msg').textContent = "Invalid credentials or role.";
    }
});
