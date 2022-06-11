const express = require("express");
const queryPago = require("../usecases/queryPago");
const { authHandler } = require("../middlewares/authHandlers");
const {
  adminHandler,
} = require("../middlewares/permissionHandlers");

const router = express.Router();

router.get("/:month", async (req, res,next)=>{
    try{

        const { token } = req.headers;

        const verifiedToken = await jwt.verify(token);
      
    const { sub } = verifiedToken
         
        
    const{month}= req.params;
    console.log("queryPago",id, month)
    const queryPagos = await queryPago.getByIdandMonth(sub,month);    
    res.json({success: true,
        payload: queryPagos});
    }catch(error)
    {
        next(error);

    }
})


module.exports = router;