const BookingModel = require("../../src/db/booking_model");

test("should valid model", async () => {
  const model = new BookingModel({
    party: 1,
    name: "pui",
    email: "email@email.com",
    date: "2020/10/18",
    time: "04:00 PM",
    phone: "",
    message: "",
  });
  await expect(model.validator()).resolves.toStrictEqual(model);
});

test.each`
  party | name         | email
  ${1}  | ${"user 01"} | ${"email@1.com"}
  ${2}  | ${"user 02"} | ${"email@2.com"}
`(
  "Data-driven testing with $party and name=$name",
  async ({ party, name, email }) => {
    const model = new BookingModel({
      party: party,
      name: name,
      email: email,
      date: "2020/10/18",
      time: "04:00 PM",
      phone: "",
      message: "",
    });
    await expect(model.validator()).resolves.toStrictEqual(model);
  }
);
