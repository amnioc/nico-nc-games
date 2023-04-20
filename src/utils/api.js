import axios from "axios";

// const reviews = axios.create({
//   baseURL: "https://nicos-nc-games.onrender.com/api/reviews",
// });

export const getAllReviews = () => {
  return axios
    .get("https://nicos-nc-games.onrender.com/api/reviews")
    .then((response) => {
      return response.data.reviews;
    });
};

export const fetchReviewByID = (review_id) => {
  return axios
    .get(`https://nicos-nc-games.onrender.com/api/reviews/${review_id}`)
    .then((response) => {
      return response.data.review;
    });
};

export const getReviewCommentsById = (review_id) => {
  return axios
    .get(
      `https://nicos-nc-games.onrender.com/api/reviews/${review_id}/comments`
    )
    .then((response) => {
      return response.data.reviewComments;
    });
};

export const patchReviewVotes = (review_id) => {
  return axios
    .patch(`https://nicos-nc-games.onrender.com/api/reviews/${review_id}`, {
      inc_votes: 1,
    })
    .then((response) => {
      return response.data.review.votes;
    });
};

export const postNewComment = (review_id, newComment) => {
  return axios
    .post(
      `https://nicos-nc-games.onrender.com/api/reviews/${review_id}/comments`,
      newComment
    )
    .then(({ data }) => {
      return data.comment;
    });
};
