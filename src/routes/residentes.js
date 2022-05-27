const express = require("express");
const residente = require("../usecases/residentes");

const router = express.Router();

router.get("/:id", async (req, res,next)=>{
    try{

    const{id}= req.params;
    const residentes = await residente.getById(id);    
    res.json({success: true,
        payload: residentes});
    }catch(error)
    {
        next(error);

    }
})

router.get("/",  async (req,res,next)=>{
    try{

        const residentes = await residente.get();

    
        res.json({success: true,
                  payload: residentes});
    
    }catch(error)
    {
        next(error);

    }
   
});

router.post("/",  async (req,res,next)=>
{
    try{

        const {nombre,email,casa,telefono,password,user,fecha,permisos} = req.body;
        const residenteCreated = await residente.create(
            {nombre,email,casa,telefono,password,user,fecha,permisos
        });
    
        res.json({
            success: true,
            message: "residente creado", 
            payload: residenteCreated,
        });

    }catch(error)
    {
        next(error);

    }
    
});

router.put("/:id",  async (req,res,next)=>{
    try{

        const{id}= req.params;
        const {nombre,email,casa,telefono,password,user,fecha,permisos} = req.body;
        const residenteUpdated = await residente.update(
            id,
            {nombre,email,casa,telefono,password,user,fecha,permisos
        });
    
        res.json({
            success: true,
            message: "residente actualizado", 
            payload: residenteUpdated,
        });

    }catch(error)
    {
        next(error);

    }
})

router.patch("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const residenteUpdated = await residente.patch(id, { ...req.body });
  
      res.json({
        success: true,
        message: `residente ${id} actualizado`,
        payload: residenteUpdated,
      });
    } catch (error) {
      next(error);
    }
  });
  
  router.delete("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const residenteDeleted = await residente.del(id);
  
      res.json({
        success: true,
        message: `residente ${id} eliminado`,
        payload: residenteDeleted,
      });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;