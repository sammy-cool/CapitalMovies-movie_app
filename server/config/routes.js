const express = require("express");
const router = express.Router();

const usersController = require("../app/controllers/usersController");
const { authenticatedUser } = require("../app/middlewares/authentication");

router.post("/users/register", usersController.register);
router.post("/users/login", usersController.login);

router.get("/users/account", usersController.account);

router.delete("/users/logout", authenticatedUser, usersController.logout);

module.exports = router;
