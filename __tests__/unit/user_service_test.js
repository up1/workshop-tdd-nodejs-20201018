const { required } = require("joi");

const userService = require("../../src/user_service");
const userGateway = require("../../src/user_gateway");

test("should return 2 users", async () => {
  jest
    .spyOn(userGateway, "getAllUser")
    .mockResolvedValue({ code: 200, data: [{}, {}] });
  const results = await userService.searchUser();
  expect(results.data.length).toBe(2);
});

test("should return 0 users with code = 500", async () => {
  jest
    .spyOn(userGateway, "getAllUser")
    .mockRejectedValue({ code: 500, data: [] });
  await expect(userService.searchUser()).rejects.toEqual({
    code: 500,
    data: [],
  });
});
