import axios from "axios";

export const getAllReviews = (sort_by, order) => {
  return axios
    .get(
      `https://nicos-nc-games.onrender.com/api/reviews?sort_by=${sort_by}&&order=${order}`
    )
    .then((response) => {
      return response.data.reviews;
    });
};

export const getAllReviewsByCategory = (category_name) => {
  return axios
    .get(
      `https://nicos-nc-games.onrender.com/api/reviews?category=${category_name}`
    )
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

export const getCategoryNames = () => {
  return axios
    .get("https://nicos-nc-games.onrender.com/api/categories")
    .then(({ data }) => {
      return data.categories;
    });
};
