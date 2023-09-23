import axios from "axios"; 

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: //"c204125537ea4335a5c17497e483fc19",
    },
});

