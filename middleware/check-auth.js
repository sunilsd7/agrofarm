const jwt = require("jsonwebtoken");

function checkAuth(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decodedToken;
    next();
  } catch (e) {
    return res.status(202).json({
      message: "Please provide vlaid token",
      error: e,
    });
  }
}

module.exports = {
  checkAuth: checkAuth,
};
