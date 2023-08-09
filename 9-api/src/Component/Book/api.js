import axios from "axios";

const API_URL = axios.create({
  baseURL: "https://my-json-server.typicode.com/codegym-vn/mock-api-books",
});

export default API_URL;
