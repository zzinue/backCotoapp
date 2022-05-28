const express = require("express");
const queryPago = require("../usecases/queryPago");
const { authHandler } = require("../middlewares/authHandlers");
const {
  adminHandler,
} = require("../middlewares/permissionHandlers");

const router = express.Router();

router.get("/:id/:month", async (req, res,next)=>{
    try{

    const{id}= req.params;
    const{month}= req.params;
    console.log("queryPago",id, month)
    const queryPagos = await queryPago.getByIdandMonth(id,month);    
    res.json({success: true,
        payload: queryPagos});
    }catch(error)
    {
        next(error);

    }
})


module.exports = router;