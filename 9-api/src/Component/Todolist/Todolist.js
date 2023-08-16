import React, { useEffect, useState } from "react";
import axios from "axios";

const api = "https://jsonplaceholder.typicode.com/users//todos";

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [newtodo, setNewtodo] = useState("");

  useEffect(() => {
    axios
      .get(api)
      .then((respone) => {
        setTodos(respone.data);
      })
      .catch((error) => {
        console.error("Error fetchung data", error);
      });
  }, []);
  const submitTodo = async () => {
    if (newtodo.trim() === "") {
      alert("Xin hay nhap vao ");
      console.log(newtodo);
      return;
    }
    try {
      const respone = await axios.post(api, {
        title: newtodo,
        completed: false,
      });
      alert(respone.status === 201 ? "Thêm thành công" : "Thêm thất bại");
      console.log(respone);
    } catch (error) {
      console.error("Error submitting todo:", error);
      alert("Failed to submit todo. Please try again.");
    }
  };

  return (
    <>
      <div>
        <h1> To do List</h1>
        <input
          type="text"
          value={newtodo}
          onChange={(e) => {
            setNewtodo(e.target.value);
          }}
        />
        <button onClick={submitTodo}>Submit</button>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todolist;
