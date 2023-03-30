import axios from "axios";

const api = axios.create(
    {baseURL:"http://devdigitalbooking.ctdprojetos.com.br:8080/"}
);

export default api;