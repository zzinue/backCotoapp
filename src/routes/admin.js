const express = require("express");
const admin = require("../usecases/admin");

const router = express.Router();

router.get("/:id", async (req, res,next)=>{
    try{

    const{id}= req.params;
    const admins = await admin.getById(id);    
    res.json({success: true,
        payload: admins});
    }catch(error)
    {
        next(error);

    }
})

router.get("/",  async (req,res,next)=>{
    try{

        const admins = await admin.get();

    
        res.json({success: true,
                  payload: admins});
    
    }catch(error)
    {
        next(error);

    }
   
});

router.post("/",  async (req,res,next)=>
{
    try{

             const {user,password} = req.body;
        const adminCreated = await admin.create(
            {user,password
        });
    
        res.json({
            success: true,
            message: "admin creado", 
            payload: adminCreated,
        });

    }catch(error)
    {
        next(error);

    }
    
});

router.put("/:id", authHandler,  async (req,res,next)=>{
    try{

        const{id}= req.params;
        const {user,password} = req.body;
        const adminUpdated = await admin.update(
            id,
            {user,password
        });
    
        res.json({
            success: true,
            message: "admin actualizado", 
            payload: adminUpdated,
        });

    }catch(error)
    {
        next(error);

    }
})

router.patch("/:id",  authHandler, async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const adminUpdated = await admin.patch(id, { ...req.body });
  
      res.json({
        success: true,
        message: `admin ${id} actualizado`,
        payload: adminUpdated,
      });
    } catch (error) {
      next(error);
    }
  });
  
  router.delete("/:id",  authHandler, async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const adminDeleted = await admin.del(id);
  
      res.json({
        success: true,
        message: `admin ${id} eliminado`,
        payload: adminDeleted,
      });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;