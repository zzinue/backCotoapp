const express = require("express");
const queryPago = require("../usecases/queryPago");
const { authHandler } = require("../middlewares/authHandlers");
const {
  adminHandler,
} = require("../middlewares/permissionHandlers");

const router = express.Router();

router.get("/:id/:year", async (req, res,next)=>{
    try{

    const{id}= req.params;
    const{year}= req.params;
    console.log("queryPago",id, year)
    const queryPagos = await queryPago.getByIdandYear(id,year);    
    res.json({success: true,
        payload: queryPagos});
    }catch(error)
    {
        next(error);

    }
})


module.exports = router;