const express = require("express");
const gasto_configuracion = require("../usecases/gasto_configuracion");

const router = express.Router();

router.get("/:id", async (req, res,next)=>{
    try{

    const{id}= req.params;
    const gasto_configuraciones = await gasto_configuracion.getById(id);    
    res.json({success: true,
        payload: gasto_configuraciones});
    }catch(error)
    {
        next(error);

    }
})

router.get("/",  async (req,res,next)=>{
    try{

        const gasto_configuraciones = await gasto_configuracion.get();

    
        res.json({success: true,
                  payload: gasto_configuraciones});
    
    }catch(error)
    {
        next(error);

    }
   
});

router.post("/",  async (req,res,next)=>
{
    try{
        const {concepto,monto,descripcion,imagen,seRepite,periodicidad} = req.body;
        const gasto_configuracionCreated = await gasto_configuracion.create(
            {concepto,monto,descripcion,imagen,seRepite,periodicidad
        });
    
        res.json({
            success: true,
            message: "gasto_configuracion creado", 
            payload: gasto_configuracionCreated,
        });

    }catch(error)
    {
        next(error);

    }
    
});

router.put("/:id",  async (req,res,next)=>{
    try{

        const{id}= req.params;
        const {concepto,monto,descripcion,imagen,seRepite,periodicidad} = req.body;
        const gasto_configuracionUpdated = await gasto_configuracion.update(
            id,
            {concepto,monto,descripcion,imagen,seRepite,periodicidad
        });
    
        res.json({
            success: true,
            message: "gasto_configuracion actualizado", 
            payload: gasto_configuracionUpdated,
        });

    }catch(error)
    {
        next(error);

    }
})

router.patch("/:id",   async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const gasto_configuracionUpdated = await gasto_configuracion.patch(id, { ...req.body });
  
      res.json({
        success: true,
        message: `gasto_configuracion ${id} actualizado`,
        payload: gasto_configuracionUpdated,
      });
    } catch (error) {
      next(error);
    }
  });
  
  router.delete("/:id",   async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const gasto_configuracionDeleted = await gasto_configuracion.del(id);
  
      res.json({
        success: true,
        message: `gasto_configuracion ${id} eliminado`,
        payload: gasto_configuracionDeleted,
      });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;