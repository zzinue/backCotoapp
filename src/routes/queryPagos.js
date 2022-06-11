const express = require("express");
const queryPago = require("../usecases/queryPago");
const { authHandler } = require("../middlewares/authHandlers");
const {
  adminHandler,
} = require("../middlewares/permissionHandlers");
const jwt = require("../lib/jwt");

const router = express.Router();

router.get("/", async (req, res,next)=>{
    try{

        const { token } = req.headers;

        const verifiedToken = await jwt.verify(token);
      
    const { sub } = verifiedToken
    const queryPagos = await queryPago.getById(sub);    
    res.json({success: true,
        payload: queryPagos});
    }catch(error)
    {
        next(error);

    }
})


module.exports = router;