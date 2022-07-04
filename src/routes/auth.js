const express = require("express");
const residente = require("../usecases/residentes");

const jwt = require("../lib/jwt");

const router = express.Router();
const { authHandler } = require("../middlewares/authHandlers");
const { adminHandler } = require("../middlewares/permissionHandlers");



    router.post("/login", async (req, res, next) => {
      try {
        const { email, password } = req.body;
    
        const retrievedResident = await residente.getByEmail(email);
    console.log(retrievedResident);
        if(retrievedResident!=null){
        const isMatch = await residente.authenticate(retrievedResident, password);
         console.log(isMatch)
        if (isMatch) {
          const token = await jwt.sign({
            sub: retrievedResident._id,
            role: retrievedResident.permisos,
          });
    
          console.log(retrievedResident.permisos)
          res.json({
            success: true,
            payload: token,
            role: retrievedResident.permisos,
          });
        } else {
          res
            .status(401)
            .json({ success: false, message: "Contraseña incorrecta" });
        }}
        else{
          throw new Error("No existe el usuario");
        }
      } catch (error) {
        next(error);
      }
    });



router.get("/validtoken", authHandler, async (req, res, next) => {
  
  res.json({
    success: true,
    message: "Resident valid"
  })
});

router.get("/isAdmin", adminHandler, async (req, res, next) => {
  res.json({
    success: true,
    message: "admin permisos",
    role: "admin"
  })
});

module.exports = router; 
