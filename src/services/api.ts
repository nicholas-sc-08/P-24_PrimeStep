import axios from "axios";

const api = axios.create({baseURL: "http://localhost:8080/", headers: { "Content-Type": "aplication/json"}, timeout: 1000});
export default api;