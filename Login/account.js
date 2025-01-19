document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    console.log(username);
    console.log(password);
    // Kiểm tra tên đăng nhập và mật khẩu ở đây
    // Ví dụ: if (username === "admin" && password === "123") { ... }
  });
  