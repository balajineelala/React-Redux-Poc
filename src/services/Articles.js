import axios from "axios";

export default function fetchArticles() {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}
