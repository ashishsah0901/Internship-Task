import axios from "axios";

const instance = axios.create({
    baseURL: "https://registertest.free.beeceptor.com",
});

export default instance;
