const jwt = require("../lib/jwt");

const adminHandler = async (req, res, next) => {
  try {
    const { token } = req.headers;
  
    const verifiedToken = await jwt.verify(token);
    req.params.tokenPayload = verifiedToken;
    
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
