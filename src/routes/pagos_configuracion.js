const express = require("express");
const pago_configuracion = require("../usecases/pago_configuracion");

const router = express.Router();

router.get("/:id", async (req, res,next)=>{
    try{

    const{id}= req.params;
    const pago_configuraciones = await pago_configuracion.getById(id);    
    res.json({success: true,
        payload: pago_configuraciones});
    }catch(error)
    {
        next(error);

    }
})

router.get("/",  async (req,res,next)=>{
    try{

        const pago_configuraciones = await pago_configuracion.get();

    
        res.json({success: true,
                  payload: pago_configuraciones});
    
    }catch(error)
    {
        next(error);

    }
   
});

router.post("/",  async (req,res,next)=>
{
    try{


        const {concepto,descripcion,monto,periodicidad,tieneFechaLimite,fechaLimite,fecha_registro, permisos} = req.body;
        const pago_configuracionCreated = await pago_configuracion.create(
            {concepto,descripcion,monto,periodicidad,tieneFechaLimite,fechaLimite,fecha_registro, permisos
        });
    
        res.json({
            success: true,
            message: "pago_configuracion creado", 
            payload: pago_configuracionCreated,
        });

    }catch(error)
    {
        next(error);

    }
    
});

router.put("/:id",  async (req,res,next)=>{
    try{

        const{id}= req.params;
        const {concepto,descripcion,monto,periodicidad,tieneFechaLimite,fechaLimite,fecha_registro, permisos} = req.body;
        const pago_configuracionUpdated = await pago_configuracion.update(
            id,
            {concepto,descripcion,monto,periodicidad,tieneFechaLimite,fechaLimite,fecha_registro, permisos
        });
    
        res.json({
            success: true,
            message: "pago_configuracion actualizado", 
            payload: pago_configuracionUpdated,
        });

    }catch(error)
    {
        next(error);

    }
})

router.patch("/:id",  async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const pago_configuracionUpdated = await pago_configuracion.patch(id, { ...req.body });
  
      res.json({
        success: true,
        message: `pago_configuracion ${id} actualizado`,
        payload: pago_configuracionUpdated,
      });
    } catch (error) {
      next(error);
    }
  });
  
  router.delete("/:id",  async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const pago_configuracionDeleted = await pago_configuracion.del(id);
  
      res.json({
        success: true,
        message: `pago_configuracion ${id} eliminado`,
        payload: pago_configuracionDeleted,
      });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;