const express = require("express");
const queryPago = require("../usecases/queryPago");
const { authHandler } = require("../middlewares/authHandlers");
const {
  adminHandler,
} = require("../middlewares/permissionHandlers");

const router = express.Router();

router.get("/:year", async (req, res,next)=>{
    try{

        const { token } = req.headers;

        const verifiedToken = await jwt.verify(token);
      
    const { sub } = verifiedToken
         
    const{year}= req.params;

    const queryPagos = await queryPago.getByIdandYear(sub,year);    
    res.json({success: true,
        payload: queryPagos});
    }catch(error)
    {
        next(error);

    }
})


module.exports = router;