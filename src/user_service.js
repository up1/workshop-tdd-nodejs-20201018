const userGateway = require("./user_gateway");

const searchUser = async (user) => {
  return await userGateway.getAllUser();
};

module.exports = { searchUser };
