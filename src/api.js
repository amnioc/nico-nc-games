import axios from "axios";

export const getAllReviews = () => {
  return axios.get("https://nicos-nc-games.onrender.com/api/reviews");
};
