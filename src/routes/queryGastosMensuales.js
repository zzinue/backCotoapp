const express = require("express");
const queryGasto = require("../usecases/queryGasto");
const { authHandler } = require("../middlewares/authHandlers");
const {
  adminHandler,
} = require("../middlewares/permissionHandlers");

const router = express.Router();

router.get("/:month", async (req, res,next)=>{
    try{

    const{month}= req.params;
    console.log("queryGasto", month)
    const queryGastos = await queryGasto.getByMonth(month);    
    res.json({success: true,
        payload: queryGastos});
    }catch(error)
    {
        next(error);

    }
})


module.exports = router;