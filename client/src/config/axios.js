import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://capital-movie1s.herokuapp.com/",
});

export default axios;
