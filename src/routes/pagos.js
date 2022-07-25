const express = require("express");
const pago = require("../usecases/pago");
const fs = require('fs');


const router = express.Router();

router.get("/:id", async (req, res,next)=>{
    try{

    const{id}= req.params;
    const pagos = await pago.getById(id);    
    res.json({success: true,
        payload: pagos});
    }catch(error)
    {
        next(error);

    }
})

router.get("/",  async (req,res,next)=>{
    try{

        const pagos = await pago.get();

    
        res.json({success: true,
                  payload: pagos});
    
    }catch(error)
    {
        next(error);

    }
   
});

router.post("/",  async (req,res,next)=>
{
    try{

 

   
             const {monto,fecha_pago,comprobante,aprobado,casa,pago_id,data} = req.body;
             const pago = data;
             console.log("pago",pago);
             const buffer = fs.readFileSync(pago.tempFilePath);
             const base64 = buffer.toString('base64');
             comprobante = base64;
             
        const pagoCreated = await pago.create(
            {monto,fecha_pago,comprobante,aprobado,casa,pago_id
        });
    
        res.json({
            success: true,
            message: "pago creado", 
            payload: pagoCreated,
            base64: base64,
        });

    }catch(error)
    {
        next(error);

    }
    
});

router.put("/:id",  async (req,res,next)=>{
    try{

        const{id}= req.params;
        const {monto,fecha_pago,comprobante,aprobado,casa,pago_id} = req.body;
        const pagoUpdated = await pago.update(
            id,
            {monto,fecha_pago,comprobante,aprobado,casa,pago_id
        });
    
        res.json({
            success: true,
            message: "pago actualizado", 
            payload: pagoUpdated,
        });

    }catch(error)
    {
        next(error);

    }
})

router.patch("/:id",  async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const pagoUpdated = await pago.patch(id, { ...req.body });
  
      res.json({
        success: true,
        message: `pago ${id} actualizado`,
        payload: pagoUpdated,
      });
    } catch (error) {
      next(error);
    }
  });
  
  router.delete("/:id",   async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const pagoDeleted = await pago.del(id);
  
      res.json({
        success: true,
        message: `pago ${id} eliminado`,
        payload: pagoDeleted,
      });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;