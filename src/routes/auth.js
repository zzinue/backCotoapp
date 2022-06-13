const express = require("express");
const residente = require("../usecases/residentes");
const admin = require('../usecases/admin')
const jwt = require("../lib/jwt");
const { response } = require("express");
const router = express.Router();
const { authHandler } = require("../middlewares/authHandlers");
const { adminHandler } = require("../middlewares/permissionHandlers");

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const retrievedResident = await residente.getByEmail(email);


    if (retrievedResident) {
      const isMatch = await residente.authenticate(retrievedResident, password);


      if (!isMatch) {
        res
          .status(401)
          .json({ success: false, message: "Credenciales incorrectas" });

      }
      const token = await jwt.sign({
        sub: retrievedResident._id,
        role: retrievedResident.permisos,
      });

      res.json({
        success: true,
        payload: token,
      });
      return;
    }
    const retrievedAdmin = await admin.getAdminByUser(email)
    if (retrievedAdmin) {
      



      if (retrievedAdmin.password !== String(password)) {

        res
          .status(401)
          .json({ success: false, message: "Credenciales incorrectas" });
        return
      }
      const token = await jwt.sign({
        sub: retrievedAdmin._id,
        // role: retrievedResident.permisos,
      });

      res.json({
        success: true,
        payload: token,
      });
      return;
    }


    res
      .status(401)
      .json({ success: false, message: "Credenciales incorrectas" });

  } catch (error) {
    next(error);
  }
});

router.get("/validtoken", authHandler, async (req, res, next) => {
  res.json({
    success: true,
    message: "User valid"
  })
});

router.get("/isAdmin", adminHandler, async (req, res, next) => {
  res.json({
    success: true,
    message: "admin permisos"
  })
});

module.exports = router; 
