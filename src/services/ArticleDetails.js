import axios from "axios";

export default function fetchArticleDetails(param) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${param}`);
}
