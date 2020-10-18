const userService = require("../src/user_service");

test("Demo stub", () => {
  const userGateway = require("../src/user_gateway");
  // Create Stub
  jest.spyOn(userGateway, "getAllUser").mockReturnValue(
    Promise.resolve({
      code: 200,
      data: [],
    })
  );
  expect(userService.searchUser()).resolves.toStrictEqual({
    code: 200,
    data: [],
  });
  jest.clearAllMocks();
});

test("Demo spy", () => {
  const userGateway = require("../src/user_gateway");
  // Create Stub
  const spy = jest.spyOn(userGateway, "getAllUser");

  userService.searchUser();

  expect(spy).toBeCalled();
  expect(spy).toBeCalledTimes(1);
  jest.clearAllMocks();
});
