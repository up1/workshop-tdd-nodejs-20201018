const bookingRepository = require("../../src/db/booking_repository");
const BookingModel = require("../../src/db/booking_model");
// jest.unmock("sqlite3");

afterAll(() => {
  jest.clearAllMocks();
});

test("get all booking", async () => {
  bookingRepository.getAll();
});

test("Create", async () => {
  const model = new BookingModel({
    party: 1,
    name: "pui",
    email: "email@email.com",
    date: "2020/10/18",
    time: "04:00 PM",
    phone: "",
    message: "",
  });
  const lastId = await bookingRepository.create(model);
  expect(lastId).toBe(9999);
});
