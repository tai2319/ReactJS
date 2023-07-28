import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ account }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xử lý đăng xuất ở đây nếu cần thiết
    navigate("/login"); // Chuyển về trang login sau khi đăng xuất
  };

  return (
    <div>
      <h2>Thông tin tài khoản:</h2>
      <p>Email: {account.email}</p>
      <p>Password: {account.password}</p>

      <button onClick={handleLogout}>Đăng xuất</button>
    </div>
  );
};

export default Home;
