const express = require("express");
const residente = require("../usecases/residentes");
const { authHandler } = require("../middlewares/authHandlers");
const {
  adminHandler,
} = require("../middlewares/permissionHandlers");

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

router.post("/:nombre", async (req, res,next)=>{
  try{

  const{nombre}= req.params;
  const residentes = await residente.getByName(nombre.toUpperCase());    
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

        let {nombre,email,casa,telefono} = req.body;
        const upper_nombre = nombre.toUpperCase();
        console.log(upper_nombre)
        nombre = upper_nombre;
        const residenteCreated = await residente.create(
            {nombre,email,casa,telefono});
    
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

router.put("/:id",  authHandler, async (req,res,next)=>{
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