import axios from "axios"
const mainURL = axios.create({
    baseURL : "http://localhost:7000"
})
export default mainURL