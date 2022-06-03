const express = require("express");
const queryGasto = require("../usecases/queryGasto");
const { authHandler } = require("../middlewares/authHandlers");
const {
  adminHandler,
} = require("../middlewares/permissionHandlers");

const router = express.Router();

router.get("/", async (req, res,next)=>{
    try{

    
    const queryGastos = await queryGasto.get();     
    res.json({success: true,
        payload: queryGastos});
    }catch(error)
    {
        next(error);

    }
})


module.exports = router;