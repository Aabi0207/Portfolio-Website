import axios from "axios";

const api = axios.create({
    baseURL: "https://iamvengeance.pythonanywhere.com/",
    headers: {
        'Content-Type': 'application/json',
    },
});