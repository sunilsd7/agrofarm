const models = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

function signup(req, res) {
  models.Signup.findOne({ where: { email: req.body.email } })
    .then((result) => {
      if (result) {
        res.status(409).json({
          message: "Email already exists",
        });
      } else {
        bcryptjs.genSalt(10, function (err, salt) {
          bcryptjs.hash(req.body.password, salt, function (err, hash) {
            const user = {
              name: req.body.name,
              email: req.body.email,
              password: hash,
            };

            models.Signup.create(user)
              .then((result) => {
                res.status(200).json({
                  message: "User created sucessfully",
                });
              })
              .catch((error) => {
                res.status(500).json({
                  message: "Something went wrong!",
                  error: error,
                });
              });
          });
        });
      }
    })
    .catch((error) => {
      res.status(400).json({
        message: "Something went wrong!",
      });
    });
}

function login(req, res) {
  models.Signup.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (user == null) {
        res.status(401).json({
          message: "Invalid user!",
        });
      } else {
        bcryptjs.compare(
          req.body.password,
          user.password,
          function (err, result) {
            if (result) {
              const token = jwt.sign(
                {
                  email: user.email,
                  userId: user.id,
                },
                process.env.JWT_KEY,
                function (err, token) {
                  res.status(200).json({
                    message: "Authentication Sucessfully!",
                    token: token,
                  });
                }
              );
            } else {
              res.status(401).json({
                message: "wrong password!",
              });
            }
          }
        );
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}
module.exports = {
  signup: signup,
  login: login,
};
