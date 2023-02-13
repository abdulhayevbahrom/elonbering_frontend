import axios from 'axios';

const mainURL = axios.create({
    baseURL: "https://elonbering-backend.onrender.com/"
})

export default mainURL;