const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const usersController = {};

usersController.register = (req, res) => {
  const body = req.body;
  const user = new User(body);
  user
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

usersController.login = (req, res) => {
  const body = req.body;
  // check if email is present
  User.findOne({ email: body.email })
    .then((user) => {
      if (user) {
        bcryptjs.compare(body.password, user.password).then((result) => {
          if (result) {
            const tokenData = {
              id: user._id,
            };
            const token = jwt.sign(tokenData, "capitalMovie", {
              expiresIn: "2d",
            });
            res.json({
              token: token,
            });
          } else {
            res.json({ error: "invalid email/password" });
          }
        });
      } else {
        res.json({ error: "invalid email/password" });
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

usersController.account = (req, res) => {
  User.findById(req.userId)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

usersController.logout = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then((user) => {
      res.json({ notice: "successfully logged out" });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = usersController;
