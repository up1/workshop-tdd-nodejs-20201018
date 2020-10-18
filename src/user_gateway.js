const axios = require("axios").default;

const getAllUser = () => {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.cypress.io/users",
    responseType: "json",
  })
    .then((response) => {
      return {
        code: 200,
        data: response.data,
      };
    })
    .catch((error) => {
      return {
        code: 500,
        data: [],
      };
    });
};

module.exports = { getAllUser };
