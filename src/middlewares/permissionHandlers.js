const jwt = require("../lib/jwt");

const adminHandler = async (req, res, next) => {
  try {
    const { token } = req.headers;
    console.log("req.params", req.params);
    const verifiedToken = await jwt.verify(token);
    req.params.tokenPayload = verifiedToken;
    console.log(req.params.tokenPayload);
    const { role } = req.params.tokenPayload;

    if (role !== "admin") {
       return false
    }

    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { adminHandler };
