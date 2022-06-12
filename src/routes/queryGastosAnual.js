const express = require("express");
const queryGasto = require("../usecases/queryGasto");
const { authHandler } = require("../middlewares/authHandlers");
const {
  adminHandler,
} = require("../middlewares/permissionHandlers");

const router = express.Router();

router.get("/:year", async (req, res,next)=>{
    try{

    
    const{year}= req.params;
  
    const queryGastos = await queryGasto.getByYear(year);    
    res.json({success: true,
        payload: queryGastos});
    }catch(error)
    {
        next(error);

    }
})


module.exports = router;