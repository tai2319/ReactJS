import React, { Component } from "react";
class Expand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: true,
    };
  }
  handle = () => {
    if (this.state.isExpand) {
      this.setState({ isExpand: false });
    } else {
      this.setState({ isExpand: true });
    }
  };
  render() {
    if (this.state.isExpand) {
      return (
        <>
          <h1>Conditional Rendering </h1>
          <button onClick={this.handle}>Xem Giới Thiệu</button>
        </>
      );
    } else {
      return (
        <>
          <h1>Conditional Rendering </h1>
          <button onClick={this.handle}>Đóng giới thiệu</button>
          <p>
            Tạo class App bằng class App extends Component Gọi hàm
            constructor(props) Gọi hàm super(props) Cập nhật object this.state
            lần lượt theo các key-value: isExpand: false
          </p>
        </>
      );
    }
  }
}
export default Expand;
