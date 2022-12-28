const express = require("express");
const usersController = require("../../../controllers/users.controller");
const router = express.Router();

router.route("/").get(usersController.getAllusers);
router.route("/:id").get(usersController.randomUsers);

module.exports = router;
