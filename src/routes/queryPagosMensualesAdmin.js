const express = require("express");
const queryPago = require("../usecases/queryPago");
const { authHandler } = require("../middlewares/authHandlers");
const {
  adminHandler,
} = require("../middlewares/permissionHandlers");

const router = express.Router();

router.get("/:month", async (req, res,next)=>{
    try{

       
        
    const{month}= req.params;
   
    const queryPagos = await queryPago.getByMonth(month);    
    res.json({success: true,
        payload: queryPagos});
    }catch(error)
    {
        next(error);

    }
})


module.exports = router;