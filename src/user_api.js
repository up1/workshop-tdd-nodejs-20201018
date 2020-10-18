const express = require("express");
const userService = require("./user_service");
const router = express.Router();

router.get("/users", async (req, res) => {
  userService
    .searchUser()
    .then((result) => {
      if (result.data.length == 0) {
        res.status(404).send({ error: "User not found" });
        return;
      }
      res.status(200).send(result.data);
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
});

module.exports = router;
