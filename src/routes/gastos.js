const express = require("express");
const gasto = require("../usecases/gasto");

const router = express.Router();

router.get("/:id", async (req, res,next)=>{
    try{

    const{id}= req.params;
    const gastos = await gasto.getById(id);    
    res.json({success: true,
        payload: gastos});
    }catch(error)
    {
        next(error);

    }
})

router.get("/",  async (req,res,next)=>{
    try{

        const gastos = await gasto.get();

    
        res.json({success: true,
                  payload: gastos});
    
    }catch(error)
    {
        next(error);

    }
   
});

router.post("/",  async (req,res,next)=>
{
    try{


             const {concepto,monto,fecha_gasto,comprobante,descripcion,imagen_mejora} = req.body;
        const gastoCreated = await gasto.create(
            {concepto,monto,fecha_gasto,comprobante,descripcion,imagen_mejora
        });
    
        res.json({
            success: true,
            message: "gasto creado", 
            payload: gastoCreated,
        });

    }catch(error)
    {
        next(error);

    }
    
});

router.put("/:id",  async (req,res,next)=>{
    try{

        const{id}= req.params;
        const {concepto,monto,fecha_gasto,comprobante,descripcion,imagen_mejora} = req.body;
        const gastoUpdated = await gasto.update(
            id,
            {concepto,monto,fecha_gasto,comprobante,descripcion,imagen_mejora
        });
    
        res.json({
            success: true,
            message: "gasto actualizado", 
            payload: gastoUpdated,
        });

    }catch(error)
    {
        next(error);

    }
})

router.patch("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const gastoUpdated = await gasto.patch(id, { ...req.body });
  
      res.json({
        success: true,
        message: `gasto ${id} actualizado`,
        payload: gastoUpdated,
      });
    } catch (error) {
      next(error);
    }
  });
  
  router.delete("/:id",  async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const gastoDeleted = await gasto.del(id);
  
      res.json({
        success: true,
        message: `gasto ${id} eliminado`,
        payload: gastoDeleted,
      });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;