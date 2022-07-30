const express = require("express");
const s3 = require("../usecases/s3");

const router = express.Router();

router.get("/s3Url", async (req, res,next)=>{
   const url = await s3.generateUploadURL();
   res.send({url})
})

module.exports = router;