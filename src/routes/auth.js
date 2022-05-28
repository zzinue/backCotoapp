const express = require("express");
const residente = require("../usecases/residentes");
const jwt = require("../lib/jwt");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const retrievedResident = await residente.getByEmail(email);

    const isMatch = await residente.authenticate(retrievedResident, password);

    if (isMatch) {
      const token = await jwt.sign({
        sub: retrievedResident._id,
        role: retrievedResident.permisos,
      });

      res.json({
        success: true,
        payload: token,
      });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Credenciales incorrectas" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router; 
