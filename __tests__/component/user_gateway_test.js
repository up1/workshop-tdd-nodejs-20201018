const nock = require("nock");
const userGateway = require("../../src/user_gateway");

test("should return 2 users from User API", async () => {
  // Mock server
  nock("https://jsonplaceholder.cypress.io")
    .defaultReplyHeaders({ "access-control-allow-origin": "*" })
    .get("/users")
    .reply(200, [{}, {}]);

  // Verify
  const response = await userGateway.getAllUser();
  expect(response.data.length).toEqual(2);
});

test("should return 0 users from error API Code=500", async () => {
  // Mock server
  nock("https://jsonplaceholder.cypress.io")
    .defaultReplyHeaders({ "access-control-allow-origin": "*" })
    .get("/users")
    .reply(500);

  // Verify
  const response = await userGateway.getAllUser();
  expect(response.code).toEqual(500);
  expect(response.data.length).toEqual(0);
});
