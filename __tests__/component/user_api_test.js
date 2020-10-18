const request = require("supertest");
const app = require("../../src/app");
const userService = require("../../src/user_service");

afterEach(() => {
  jest.clearAllMocks();
});

test("should return 404", (done) => {
  jest
    .spyOn(userService, "searchUser")
    .mockResolvedValue({ code: 200, data: [] });

  request(app)
    .get("/api/users")
    .expect("Content-Type", /json/)
    .expect(404)
    .end(function (err, res) {
      if (err) throw err;
      done();
    });
});

test("should return 0 users with code = 500", (done) => {
  jest
    .spyOn(userService, "searchUser")
    .mockRejectedValue({ code: 500, data: [] });
  request(app)
    .get("/api/users")
    .expect("Content-Type", /json/)
    .expect(500)
    .end(function (err, res) {
      if (err) throw err;
      done();
    });
});
