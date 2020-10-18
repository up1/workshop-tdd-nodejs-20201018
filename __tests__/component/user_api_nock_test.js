const request = require("supertest");
const app = require("../../src/app");
const nock = require("nock");

beforeEach(() => {
  // Mock server
  nock("https://jsonplaceholder.cypress.io")
    .defaultReplyHeaders({ "access-control-allow-origin": "*" })
    .get("/users")
    .reply(200, [{}, {}]);
});

test("should return 200", async () => {
  await request(app)
    .get("/api/users")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.length).toBe(2);
    });
});
