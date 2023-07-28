import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra account nhập vào
    if (email === "admin@gmail.com" && password === "123") {
      onLogin({ email, password }); // Gọi hàm onLogin với thông tin account
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Đăng nhập</button>
    </form>
  );
};

export default Login;
